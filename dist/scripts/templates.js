this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<ul class=\"beers-list\">\n</ul>\n<section class=\"beer-detail\">\n  <h1>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.beer : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h1>\n  <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.beer : depth0)) != null ? stack1.description : stack1), depth0))
    + "</p>\n</section>\n";
},"useData":true});
this["JST"]["beers"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <li>"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + " - "
    + alias3(((helper = (helper = helpers.abv || (depth0 != null ? depth0.abv : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"abv","hash":{},"data":data}) : helper)))
    + "%</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});