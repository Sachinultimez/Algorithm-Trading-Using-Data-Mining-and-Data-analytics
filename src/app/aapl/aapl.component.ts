import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-aapl',
  templateUrl: './aapl.component.html',
  styleUrls: ['./aapl.component.css']
})
export class AAPLComponent implements OnInit {

  months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  source: any =
  {
    datatype: 'csv',
    datafields: [
      { name: 'timestamp' },
      { name: 'open' },
      { name: 'high' },
      { name: 'low' },
      { name: 'close' },
       {name: 'volume'},
    ],
    url: 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=85D3HVNRSASR3WTJ&datatype=csv'
  };

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '150%';
    }

    return 600;
  }

  dataAdapter = new jqx.dataAdapter(this.source, { async: true, autoBind: true,autoRefresh:true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });
  //  value: new Date().setHours(-5.5),
  //source.refresh();


  toolTipCustomFormatFn = (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any) => {
    let dataItem = this.dataAdapter.records[itemIndex];

    return '<DIV style="text-align:left"><b>Time: ' + categoryValue.getHours() + ":" +
      categoryValue.getMinutes() + '<br><b>Date:<br>' + categoryValue.getDate() + "-" + this.months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() +
      '</b><br />Open price: $' + value.open +
      '</b><br />Close price: $' + value.close +
      '</b><br />Low price: $' + value.low +
      '</b><br />High price: $' + value.high +

      '</DIV>';
  };

  padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

  xAxis: any =
  {

    // type: 'dateTime'
    dataField: 'timestamp',
    type: 'date',
    unitInterval: 2,
    // baseUnit: 'second'
    baseUnit: 'hour',
    labels: { angle: -45, offset: { x: -17, y: 0 } },
    formatFunction: (value: any) => {
      // return (value.getHours());
      return jqx.dataFormat.formatDate(value, 'hh:mm', 'en-us');
    },
    gridLines: { step: 2 },
    valuesOnTicks: true,
    //  labels: { angle: -45, offset: { x: -17, y: 0 } }
  };

  seriesGroups: any[] =
  [
    {
      type: 'candlestick',
      columnsMaxWidth: 15,
      columnsMinWidth: 5,
      toolTipFormatFunction: this.toolTipCustomFormatFn,

      series: [
        {
          dataFieldClose: 'close',
          displayTextClose: ' Close price',
          dataFieldOpen: 'open',
          displayTextOpen: 'Open price',
          dataFieldHigh: 'high',
          displayTextHigh: 'High price',
          dataFieldLow: 'low',
          displayTextLow: 'Low price',
          displayText: 'USD / EURO',
          lineWidth: 1
        }
      ]
    },
     {
                type: 'line',
                valueAxis:
                {
                    position: 'right',
                    title: { text: '<br>Daily Volume' },
                    gridLines: { visible: false },
                    labels: {
                        formatFunction: (value: string) => {
                            return (parseInt(value) / 1000000) + 'M';
                        }
                    }
                },
                series: [
                    {
                        dataField: 'volume',
                        displayText: 'Volume',
                        lineWidth: 1
                    }
                ]
            }

  ];

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }
  url_:string ="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&&apikey=85D3HVNRSASR3WTJ";
users_: any[];
randomnum : any = (Math.random() * (10.00 - 1.00 + 9.00) + 1.00).toFixed(2);
randomnum1 : any = (Math.random() * (10.00 - 1.00 + 3.00) + 1.00).toFixed(1);

func(){
  this.http.get(this.url_).subscribe((data: any[]) => {
    this.users_= data['Time Series FX (5min):'];
    console.log('Result - ', data);
    console.log('data is received');
  });

}
value_ : any = "";
value1_:any="";
  showText(title:any) {
    if(title!="")
  {
   this.value_=this.randomnum * title;
   this.value1_=this.randomnum1*title;
  // alert("hello");
  }
  else
  {
    alert("Enter value");
  }
  }
}