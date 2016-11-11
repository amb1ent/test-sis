# test-sis

Pre-requisities:

Visual Studio 2015 (Update 3 RTM)
nodejs tools for VS2015: https://github.com/Microsoft/nodejstools/releases/tag/v1.2.RTW

A simple angular2 scrum manager.

1) Open the .sln file in VS2015 and run the project.

Notes:

ASP.net MVC 5 and angular 2: http://www.mithunvp.com/using-angular-2-asp-net-mvc-5-visual-studio/ 

-=-=-=-=-=-=-=-=-=-=-=-

alternative startup instructions (angular2 front-end only; linux/mac)

$ cd ScrumRetrospectives
$ npm install && typings install
$ npm start

-=-=-=-=-=-=-=-=-=-=-=-

```
TODO:

angular2 : amend the view-retrospective template to show the retrospective data
angular2 : amend the view-retrospective template to add a "create feedback" form
angular2 : mock "create feedback" in service
angular2 : mock "search by substring" and "search by date" in angular2

asp.net : create controller for the Scrum with a HTTP GET /scrum/list list() controller method
asp.net : create controller for the Retrospective with a HTTP GET /scrum/retrospective/<< id >> controller method (that uses a backend service on asp.net to access via the scrum list)
asp.net : amend Retrospective controller to have a "create feedback" method

note: a2 is great.  we could improve search by having a "search more" which goes on the server and searches server-side after setting the data page size to 1000 on the client and having search service helpers.  do most search on the client if you can.
```
