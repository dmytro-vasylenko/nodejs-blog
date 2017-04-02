var express = require("express");
var handlebars = require("express-handlebars").create();

var app = express();

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname + "/public"));


var title = "Palo Alto";

var posts = [
	{id: 1, category: "I Do Observe", date: "Sep 18", title: "Hello, World!", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quia dolorum, ullam sunt cum sed labore! Nulla illo temporibus, obcaecati hic placeat consequuntur repudiandae impedit corporis quidem consequatur earum asperiores, quibusdam eveniet eum maxime vitae officia error delectus. Voluptatum facere quaerat nesciunt nam quasi, aut, id recusandae soluta voluptas? Minima blanditiis saepe fuga sed amet quos tempora, repellendus id dolores.", tags: ["Yosemite", "Peak", "Photo"]},
	{id: 2, category: "I Do Observe", date: "Sep 18", title: "Hello, World!", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quia dolorum, ullam sunt cum sed labore! Nulla illo temporibus, obcaecati hic placeat consequuntur repudiandae impedit corporis quidem consequatur earum asperiores, quibusdam eveniet eum maxime vitae officia error delectus. Voluptatum facere quaerat nesciunt nam quasi, aut, id recusandae soluta voluptas? Minima blanditiis saepe fuga sed amet quos tempora, repellendus id dolores.", tags: ["Yosemite", "Peak", "Photo"]},
	{id: 3, category: "I Do Observe", date: "Sep 18", title: "Hello, World!", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quia dolorum, ullam sunt cum sed labore! Nulla illo temporibus, obcaecati hic placeat consequuntur repudiandae impedit corporis quidem consequatur earum asperiores, quibusdam eveniet eum maxime vitae officia error delectus. Voluptatum facere quaerat nesciunt nam quasi, aut, id recusandae soluta voluptas? Minima blanditiis saepe fuga sed amet quos tempora, repellendus id dolores.", tags: ["Yosemite", "Peak", "Photo"]},
	{id: 4, category: "I Do Observe", date: "Sep 18", title: "Hello, World!", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quia dolorum, ullam sunt cum sed labore! Nulla illo temporibus, obcaecati hic placeat consequuntur repudiandae impedit corporis quidem consequatur earum asperiores, quibusdam eveniet eum maxime vitae officia error delectus. Voluptatum facere quaerat nesciunt nam quasi, aut, id recusandae soluta voluptas? Minima blanditiis saepe fuga sed amet quos tempora, repellendus id dolores.", tags: ["Yosemite", "Peak", "Photo"]}
];

var menu = [
	{name: "Home", url: "#", active: true},
	{name: "About", url: "#", active: false},
	{name: "Archive", url: "#", active: false},
	{name: "Contact", url: "#", active: false}
];

app.get("/", function(req, res) {
	var pages = [1, 2, 3, 4, 5, 6];

	res.render("index", {
		title: title,
		menu: menu,
		posts: posts,
		pages: pages,
		paginationWidth: pages.length * 56 - 16,
	});
});

app.get("/post/:id", function(req, res) {
	console.log(req.params);
	res.render("post", {
		title: title,
		menu: menu,
		post: posts[req.params.id]
	});
});

app.listen(app.get("port"), function() {
	console.log("Express started at http://localhost:" + app.get("port"));
});