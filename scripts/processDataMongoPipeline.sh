[
  {
    $sort: {
      user_id: 1,
      date: 1,
    },
  },
  {
    $group: {
      _id: "$user_id",
      // Group by user_id
      count: {
        $sum: 1,
      },
      // Count the number of documents in each group
      actions: {
        $push: {
          action: "$action",
          date: "$date",
        },
      },
    },
  },
  {
    $project: {
      _id: 1,
      actions: {
        $sortArray: {
          input: "$actions",
          sortBy: {
            date: 1,
          }, // Sort actions by date in ascending order
        },
      },
    },
  },
  {
    $unwind: "$actions",
  },
  {
    $setWindowFields: {
      partitionBy: "$_id",
      sortBy: {
        "actions.date": 1,
      },
      output: {
        previousDate: {
          $shift: {
            output: "$actions.date",
            by: -1,
          },
        },
      },
    },
  },
  {
    $addFields: {
      timeBetweenActions: {
        $cond: {
          if: {
            $eq: ["$previousDate", null],
          },
          then: null,
          else: {
            $divide: [
              {
                $subtract: [
                  {
                    $toDate: "$actions.date",
                  },
                  {
                    $toDate: "$previousDate",
                  },
                ],
              },
              1000, // Convert milliseconds to seconds
            ],
          },
        },
      },
    },
  },
  {
    $addFields: {
      concatenatedString: {
        $concat: [
          {
            $cond: {
              if: {
                $eq: [
                  "$timeBetweenActions",
                  null,
                ],
              },
              then: "_ ",
              else: {
                $toString: "$timeBetweenActions",
              },
            },
          },
          " ",
          "$actions.action",
        ],
      },
    },
  },
  {
    $group: {
      _id: "$_id",
      actions: {
        $push: {
          // action: "$actions.action",
          // date: "$actions.date",
          // timeBetweenActions: "$timeBetweenActions",
          concatenatedString:
            "$concatenatedString",
        },
      },
    },
  },
  {
    $project: {
      _id: 0,
      test: {
        $map: {
          input: "$actions",
          as: "val",
          in: "$$val.concatenatedString",
        },
      },
    },
  },
]