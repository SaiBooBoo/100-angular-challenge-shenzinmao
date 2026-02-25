import { Component, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent {
  readonly day = computed(() => {
    const value = this.route.snapshot.paramMap.get('day');
    return value ? Number(value) : null;
  });

  constructor(private readonly route: ActivatedRoute) {}
}
