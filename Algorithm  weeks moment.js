							week = 0
							var weekStart = moment(b).add(week, 'weeks').startOf('week');
							var weeks = [];
							for (var i = 0; i < 7; i++) {
								weeks.push(weekStart.clone().add(i, 'day').format('DD/MM/YYYY'));
								console.log(weeks);
							}
                return days;
