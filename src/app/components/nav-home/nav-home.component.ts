import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit {
  public isMenuCollapsed = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  showGallery() {
    this.router.navigate(['gallery'], {relativeTo: this.route});
  }

  showKontakt() {
    this.router.navigate(['kontakt'], {relativeTo: this.route});
  }
}
