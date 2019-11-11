import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills: {'strength': string, 'imageUrl': string, 'name': string, 'link': string}[] = [
  {'strength': '100%', 'name': 'Angular 8', 'link': 'https://angular.io/', 'imageUrl': '../../assets/images/skill-icons/angular.png'},
  {'strength': '70%', 'name': 'Blender', 'link': 'https://www.blender.org/', 'imageUrl': '../../assets/images/skill-icons/blender.png'},
  {'strength': '75%', 'name': 'C#', 'link': 'https://docs.microsoft.com/en-us/dotnet/csharp/', 'imageUrl': '../../assets/images/skill-icons/csharp.png'},
  {'strength': '90%', 'name': 'CSS3', 'link': 'https://developer.mozilla.org/en-US/docs/Archive/CSS3', 'imageUrl': '../../assets/images/skill-icons/css.svg'},
  {'strength': '90%', 'name': 'Firebase', 'link': 'https://firebase.google.com/?gclid=CjwKCAiA5JnuBRA-EiwA-0ggPU0kfi2pqpTXcVjOMp3cYCWYXSY9VmUvC3ZLiFi2xdqVQ4h03AIABBoCFecQAvD_BwE', 'imageUrl': '../../assets/images/skill-icons/firebase.png'},
  {'strength': '90%', 'name': 'Git', 'link': 'https://git-scm.com/', 'imageUrl': '../../assets/images/skill-icons/git.png'},
  {'strength': '100%', 'name': 'HTML5', 'link': 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5', 'imageUrl': '../../assets/images/skill-icons/html.png'},
  {'strength': '80%', 'name': 'Ionic 2', 'link': 'https://ionicframework.com/docs', 'imageUrl': '../../assets/images/skill-icons/ionic2.png'},
  {'strength': '85%', 'name': 'Java', 'link': 'https://www.java.com/en/', 'imageUrl': '../../assets/images/skill-icons/java.png'},
  {'strength': '85%', 'name': 'JavaScript', 'link': 'https://www.javascript.com/', 'imageUrl': '../../assets/images/skill-icons/javascript.png'},
  {'strength': '75%', 'name': 'MySQL', 'link': 'https://www.mysql.com/', 'imageUrl': '../../assets/images/skill-icons/mysql.png'},
  {'strength': '60%', 'name': '.NET Core', 'link': 'https://dotnet.microsoft.com/', 'imageUrl': '../../assets/images/skill-icons/dotnet.png'},
  {'strength': '100%', 'name': 'Python', 'link': 'https://www.python.org/', 'imageUrl': '../../assets/images/skill-icons/python.ico'},
  {'strength': '80%', 'name': 'Unity', 'link': 'https://unity.com/', 'imageUrl': '../../assets/images/skill-icons/unity.png'}
];
  constructor() { }

  ngOnInit() {
  }

}
