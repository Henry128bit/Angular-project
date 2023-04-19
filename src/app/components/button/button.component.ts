import { Component, Output, EventEmitter} from '@angular/core';
import { ArrService } from '../../services/arr.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {
  title = "Press for magic!";
  isButtonDisabled = false;

  constructor(private arrService: ArrService) {}

  @Output() iconClassChanged = new EventEmitter<string>();
  
  getRandomIconClass(): string {
    const randomIndex = Math.floor(Math.random() * this.arrService.iconClasses.length);
    return this.arrService.iconClasses[randomIndex];
  }

   showRandomIcon() : void {
    // this.isButtonDisabled = true;  !-- I wanted to add this property to exclude multiple clicks on the button, 
    //                                    but this violates the 4th paragraph of the assignment. Perhaps this meant 
    //                                    writing logic specifically for this problem, I did not quite understand this 
    //                                    point and decided to leave it like that.
    setTimeout(() => {
      const randomIconClass = this.getRandomIconClass();
      this.iconClassChanged.emit(randomIconClass);
      console.log('Click');
      // this.isButtonDisabled = false;
    }, 3000)
  }
}