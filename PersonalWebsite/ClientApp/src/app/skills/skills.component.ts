import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills: {'imageUrl': string, 'name': string, 'link': string}[] = [
  {'name': 'Angular 8', 'link': 'https://angular.io/', 'imageUrl': 'https://miro.medium.com/max/500/1*nbJ41jD1-r2Oe6FsLjKaOg.png'},
  {'name': 'Blender', 'link': 'https://www.blender.org/', 'imageUrl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/1252px-Blender_logo_no_text.svg.png'},
  {'name': 'C#', 'link': 'https://docs.microsoft.com/en-us/dotnet/csharp/', 'imageUrl': 'https://seeklogo.com/images/C/csharp-logo-58C6C6F67A-seeklogo.com.png'},
  {'name': 'CSS3', 'link': 'https://developer.mozilla.org/en-US/docs/Archive/CSS3', 'imageUrl': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'},
  {'name': 'Firebase', 'link': 'https://firebase.google.com/?gclid=CjwKCAiA5JnuBRA-EiwA-0ggPU0kfi2pqpTXcVjOMp3cYCWYXSY9VmUvC3ZLiFi2xdqVQ4h03AIABBoCFecQAvD_BwE', 'imageUrl': 'https://cdn.iconscout.com/icon/free/png-512/firebase-1-282796.png'},
  {'name': 'Git', 'link': 'https://git-scm.com/', 'imageUrl': 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'},
  {'name': 'HTML5', 'link': 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5', 'imageUrl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'},
  {'name': 'Java', 'link': 'https://www.java.com/en/', 'imageUrl': 'https://www.stickpng.com/assets/images/58480979cef1014c0b5e4901.png'},
  {'name': 'JavaScript', 'link': 'https://www.javascript.com/', 'imageUrl': 'https://www.probytes.net/wp-content/uploads/2018/07/javascript-logo-E967E87D74-seeklogo.com_.png'},
  {'name': 'MySQL', 'link': 'https://www.mysql.com/', 'imageUrl': 'http://pngimg.com/uploads/mysql/mysql_PNG22.png'},
  {'name': '.NET Core', 'link': 'https://dotnet.microsoft.com/', 'imageUrl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1200px-.NET_Core_Logo.svg.png'},
  {'name': 'Python', 'link': 'https://www.python.org/', 'imageUrl': 'http://www.iconarchive.com/download/i73027/cornmanthe3rd/plex/Other-python.ico'},
  {'name': 'Unity', 'link': 'https://unity.com/', 'imageUrl': 'https://i.pinimg.com/originals/47/b1/81/47b1815866ebf696b1535a00b6fdf83c.png'}
];
  constructor() { }

  ngOnInit() {
  }

}
