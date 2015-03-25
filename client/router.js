Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	this.route('home', {path:'/'});
	this.route('webapplications', {path: '/projects/webapplications'});
	this.route('desktopapplications', {path: '/projects/desktopapplications'});
	this.route('sortingalgorithms', {path:'/projects/webapplications/sortingalgorithms'});
	this.route('quicksort', {path:'/projects/webapplications/quicksort'});
	this.route('insertionsort', {path:'/projects/webapplications/insertionsort'});
	this.route('skills', {path:'/skills'});
	this.route('experience', {path:'/experience'});
	this.route('contact', {path:'/contact'});
})