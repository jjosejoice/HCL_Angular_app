export default class dropDown {
  label: string;
  options: Array<String>[];
  selected:string;
  type:string;
  
  constructor(type="",label="",options=[],selected=""){
    this.type=type;
    this.label=label;
    this.options=options;
    this.selected=selected;

  }

  set(type,label,options,selected){
    this.type=type;
    this.label=label;
    this.options=options;
    this.selected=selected;

  }

}
