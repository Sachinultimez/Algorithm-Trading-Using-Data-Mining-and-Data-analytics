import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyVal } from '../_models';
@Injectable()
export class RestService {
  constructor(private http : HttpClient) { }
  url_ : string = "http://data.fixer.io/api/latest?access_key=ac5674dbea915f6391fb3ed88f39b5ba";
//  url_USD : string = "http://data.fixer.io/api/latest?access_key=ac5674dbea915f6391fb3ed88f39b5ba&base=USD&symbols=CAD,HKD,ISK,PHP,DKK,HUF,CZK,AUD,RON,SEK,IDR,INR,BRL,RUB,HRK,JPY,THB,CHF,SGD,PLN,BGN,TRY,CNY,NOK,NZD,ZAR,USD,MXN,ILS,GBP,KRW,MYR";
 //url_INR: string ="http://data.fixer.io/api/latest?access_key=ac5674dbea915f6391fb3ed88f39b5ba&base=INR&symbols=CAD,HKD,ISK,PHP,DKK,HUF,CZK,AUD,RON,SEK,IDR,INR,BRL,RUB,HRK,JPY,THB,CHF,SGD,PLN,BGN,TRY,CNY,NOK,NZD,ZAR,USD,MXN,ILS,GBP,KRW,MYR";
  public date:string;
 public base:string;
 public CAD:string;
 public HKD:string;
 public ISK:string;
 public PHP:string;
 public DKK:string;
 public HUF:string;
 public CZK:string;
 public AUD:string;
 public RON:string;
 public SEK:string;
 public IDR:string;
 public INR:string;
 public BRL:string;
 public RUB:string;
  public HRK:string;
  public JPY:string;
  public THB:string;
  public CHF:string;
  public SGD:string;
  public PLN:string;
  public BGN:string;
  public TRY:string;
  public CNY:string;
  public NOK:string;
  public NZD:string;
  public ZAR:string;
  public USD:string;
  public MXN:string;
  public ILS:string;
  public GBP:string;
  public KRW:string;
  public MYR:string;

  public getAll() {
    return this.http.get(this.url_);
  }

  
}