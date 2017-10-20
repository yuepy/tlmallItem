   import '../../css/calendar.css';
    var Calendar = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );
		
	};

	// the options
	Calendar.defaults = {
		/*
		you can also pass:
		month : initialize calendar with this month (1-12). Default is today.
		year : initialize calendar with this year. Default is today.
		caldata : initial data/content for the calendar.
		caldata format:
		{
			'MM-DD-YYYY' : 'HTML Content',
			'MM-DD-YYYY' : 'HTML Content',
			'MM-DD-YYYY' : 'HTML Content'
			...
		}
		*/
		weeks : [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
		weekabbrs : [ '周日', '周一', '周二', '周三', '周四', '周五', '周六' ],
		months : [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ],
		monthabbrs : [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ],
		// choose between values in options.weeks or options.weekabbrs
		displayWeekAbbr : false,
		// choose between values in options.months or options.monthabbrs
		displayMonthAbbr : false,
		// left most day in the calendar
		// 0 - Sunday, 1 - Monday, ... , 6 - Saturday
		startIn : 1
	};

	Calendar.prototype = {

		_init : function( options ) {
			
			// options
			this.options = Object.assign({}, Calendar.defaults, options );
            this.options.displayWeekAbbr = true;
			this.today = new Date();
			this.month = ( isNaN( this.options.month ) || this.options.month == null) ? this.today.getMonth() : this.options.month - 1;
			this.year = ( isNaN( this.options.year ) || this.options.year == null) ? this.today.getFullYear() : this.options.year;
            this.date = ( isNaN( this.options.date ) || this.options.date == null) ? this.today.getDate() : this.options.date;
			this.caldata = this.options.caldata || {};
			this._generateTemplate();
			this._initEvents();

		},
		_initEvents : function() {

			var self = this;

			this.$el.on( 'click.calendario', 'div.fc-row > div', function(e) {
                var $cell = $( this );
                var day =$cell[0].querySelector('b') && $cell[0].querySelector('b').textContent;

                if(!day){
                   return;
                }
				var idx = $cell.index(),
					$content = $cell.children( 'div' ),
					dateProp = {
						day : day,
						month : self.month + 1,
						monthname : self.options.displayMonthAbbr ? self.options.monthabbrs[ self.month ] : self.options.months[ self.month ],
						year : self.year,
						weekday : idx + self.options.startIn,
						weekdayname : self.options.weeks[ idx + self.options.startIn ]
					};
                var currentTarget = e.currentTarget;
                if(currentTarget && !currentTarget.classList.contains('calendar-day-checked')){
                    
                   var delegateTarget = e.delegateTarget;
                   var daysEls = delegateTarget.querySelectorAll('div.fc-row > div');
                   [...daysEls].forEach((item,index)=>{
                      if(currentTarget != item){
                          item.classList.remove('calendar-day-checked'); 
                      }else{
                          item.classList.add('calendar-day-checked'); 
                      }
                      
                   });
                }
				self.options.onDayClick(dateProp);

			} );

		},
		// Calendar logic based on http://jszen.blogspot.pt/2007/03/how-to-build-simple-calendar-with.html
		_generateTemplate : function( callback ) {

			var head = this._getHead(),
				body = this._getBody(),
				rowClass;

			switch( this.rowTotal ) {
				case 4 : rowClass = 'fc-four-rows'; break;
				case 5 : rowClass = 'fc-five-rows'; break;
				case 6 : rowClass = 'fc-six-rows'; break;
			}

			this.$cal = $( '<div class="fc-calendar ' + rowClass + '">' ).append( head, body );

			this.$el.find( 'div.fc-calendar' ).remove().end().append( this.$cal );

			if( callback ) { callback.call(); }

		},
		_getHead : function() {

			var html = '<div class="fc-head">';
		
			for ( var i = 0; i <= 6; i++ ) {

				var pos = i + this.options.startIn,
					j = pos > 6 ? pos - 6 - 1 : pos;

				html += '<div>';
				html += this.options.displayWeekAbbr ? this.options.weekabbrs[ j ] : this.options.weeks[ j ];
				html += '</div>';

			}

			html += '</div>';

			return html;

		},
		_getBody : function() {

			var d = new Date( this.year, this.month + 1, 0 ),
				// number of days in the month
				monthLength = d.getDate(),
				firstDay = new Date( this.year, this.month, 1 );

			// day of the week
			this.startingDay = firstDay.getDay();

			var html = '<div class="fc-body"><div class="fc-row">',
				// fill in the days
				day = 1;

			// this loop is for weeks (rows)
			for ( var i = 0; i < 7; i++ ) {

				// this loop is for weekdays (cells)
				for ( var j = 0; j <= 6; j++ ) {

					var pos = this.startingDay - this.options.startIn,
						p = pos < 0 ? 6 + pos + 1 : pos,
						inner = '',
						today = this.month === this.today.getMonth() && this.year === this.today.getFullYear() && day === this.today.getDate(),
						content = '';
					
					if ( day <= monthLength && ( i > 0 || j >= p ) ) {
                        // this day is:
						var strdate = ( this.month + 1 < 10 ? '0' + ( this.month + 1 ) : this.month + 1 ) + '-' + ( day < 10 ? '0' + day : day ) + '-' + this.year,
							dayData = this.caldata[ strdate ],
                            currentDay = ( this.year + '-' + (this.month + 1 < 10 ? '0' + ( this.month + 1 ) : this.month + 1 )) + '-' + ( day < 10 ? '0' + day : day );
                        const isCurrentDay = (item) => new Date(item.x_PLAN_DATE).getTime() == new Date(currentDay).getTime();
                        var filterItems = this.caldata.filter(isCurrentDay);
                        var realTime = this.getRealTime();
						inner += `
                           <span class="calendar-cell" href="#" cell-value="${filterItems.length > 0 ? filterItems[0].x_STATUS_CD : "未制定"}" cell-date="${currentDay}">
                                <b>${day}</b>
                                <span class="${new Date(realTime).getTime() > new Date(currentDay).getTime() ? 'z-done': filterItems.length > 0 && filterItems[0].x_STATUS_CD == '已提交'?'z-done-new':'z-yet'}">
                                    ${filterItems.length > 0 ? filterItems[0].x_STATUS_CD : "未制定"}
                                </span>
                           </span>
                           `;
						++day;

					}
					else {
						today = false;
					}

					var cellClasses = today ? 'fc-today ' : '';
					if( content !== '' ) {
						cellClasses += 'fc-content';
					}

					html += cellClasses !== '' ? '<div class="' + cellClasses + '">' : '<div>';
					html += inner;
					html += '</div>';

				}

				// stop making rows if we've run out of days
				if (day > monthLength) {
					this.rowTotal = i + 1;
					break;
				} 
				else {
					html += '</div><div class="fc-row">';
				}

			}
			html += '</div></div>';

			return html;

		},
		// based on http://stackoverflow.com/a/8390325/989439
		_isValidDate : function( date ) {

			date = date.replace(/-/gi,'');
			var month = parseInt( date.substring( 0, 2 ), 10 ),
				day = parseInt( date.substring( 2, 4 ), 10 ),
				year = parseInt( date.substring( 4, 8 ), 10 );

			if( ( month < 1 ) || ( month > 12 ) ) {
				return false;
			}
			else if( ( day < 1 ) || ( day > 31 ) )  {
				return false;
			}
			else if( ( ( month == 4 ) || ( month == 6 ) || ( month == 9 ) || ( month == 11 ) ) && ( day > 30 ) )  {
				return false;
			}
			else if( ( month == 2 ) && ( ( ( year % 400 ) == 0) || ( ( year % 4 ) == 0 ) ) && ( ( year % 100 ) != 0 ) && ( day > 29 ) )  {
				return false;
			}
			else if( ( month == 2 ) && ( ( year % 100 ) == 0 ) && ( day > 29 ) )  {
				return false;
			}

			return {
				day : day,
				month : month,
				year : year
			};

		},
		_move : function( period, dir, callback ) {

			if( dir === 'previous' ) {
				
				if( period === 'month' ) {
					this.year = this.month > 0 ? this.year : --this.year;
					this.month = this.month > 0 ? --this.month : 11;
				}
				else if( period === 'year' ) {
					this.year = --this.year;
				}

			}
			else if( dir === 'next' ) {

				if( period === 'month' ) {
					this.year = this.month < 11 ? this.year : ++this.year;
					this.month = this.month < 11 ? ++this.month : 0;
				}
				else if( period === 'year' ) {
					this.year = ++this.year;
				}

			}

			this._generateTemplate( callback );

		},
		/************************* 
		******PUBLIC METHODS *****
		**************************/
        getRealTime : function(){
            var date1 = new Date();
            var year = date1.getFullYear();
            var month = date1.getMonth() + 1;
            var date = date1.getDate();
            return `${year}-${month}-${date}`;
        },
		getYear : function() {
			return this.year;
		},
		getMonth : function() {
			return this.month + 1;
		},
        getDate : function(){
            return this.date;
        },
		getMonthStr : function(){
            var month = this.getMonth();
			return month > 0 && month < 10 ? '0' + month : month;
		},
		getDateStr : function(){
			var date = this.getDate();
			return date > 0 && date < 10 ? '0' + date : date;
		},
		getNextMonthStr : function(){
			var month = this.getMonth()+1;
			month = month > 12 ? 0 : month;
			return month > 0 && month < 10 ? '0' + month : month;
		},
		getPreMonthStr : function(){
			var month = this.getMonth()-1;
			month = month < 1 ? 12 : month;
			return month > 0 && month < 10 ? '0' + month : month;
		},
		getTimeByNextMonth : function(){
			var month = this.getMonth()+1;
			var year = this.getYear();
			year = (month > 12 ? year + 1 : year); 
			month = (month > 12 ? 1 : month);
			month = (month > 0 && month < 10 ? '0' + month : month);
			return `${year}-${month}`;
		},
		getTimeByPreMonth : function(){
            var month = this.getMonth()-1;
			var year = this.getYear();
			year = (month < 1 ? year -1 : year);
			month = (month < 1 ? 12 : month);
			month = (month > 0 && month < 10 ? '0' + month : month);
			return `${year}-${month}`;
		},
		getMonthName : function() {
			return this.options.displayMonthAbbr ? this.options.monthabbrs[ this.month ] : this.options.months[ this.month ];
		},
		// gets the cell's content div associated to a day of the current displayed month
		// day : 1 - [28||29||30||31]
		getCell : function( day ) {

			var row = Math.floor( ( day + this.startingDay - this.options.startIn ) / 7 ),
				pos = day + this.startingDay - this.options.startIn - ( row * 7 ) - 1;

			return this.$cal.find( 'div.fc-body' ).children( 'div.fc-row' ).eq( row ).children( 'div' ).eq( pos ).children( 'div' );

		},
		setData : function( caldata ) {
			this.caldata = caldata;
		},
		// goes to today's month/year
		gotoNow : function( callback ) {

			this.month = this.today.getMonth();
			this.year = this.today.getFullYear();
			this._generateTemplate( callback );

		},
		// goes to month/year
		goto : function( month, year, callback ) {

			this.month = month;
			this.year = year;
			this._generateTemplate( callback );

		},
		gotoPreviousMonth : function( callback , data) {
            this.setData(data);
			this._move( 'month', 'previous', callback );
		},
		gotoPreviousYear : function( callback ) {
			this._move( 'year', 'previous', callback );
		},
		gotoNextMonth : function( callback , data) {
            this.setData(data);
			this._move( 'month', 'next', callback );
		},
		gotoNextYear : function( callback ) {
			this._move( 'year', 'next', callback );
		}

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	export var getInstance = function( data, callBack, $mount ) {

		var instance = new Calendar( {
            caldata: data,
            onDayClick: callBack
        }, $mount )
		
		return instance;
		
	};

