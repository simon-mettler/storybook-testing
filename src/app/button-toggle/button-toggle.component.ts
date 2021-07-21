import { Component, Input, OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css']
})
export class ButtonToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

	/**
	 * ButtonToggle Vertical - true | false
	 */
	@Input()
	vertical: boolean = false;

}
