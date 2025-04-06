import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsMarqueeComponent } from './skills-marquee.component';

describe('SkillsMarqueeComponent', () => {
  let component: SkillsMarqueeComponent;
  let fixture: ComponentFixture<SkillsMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsMarqueeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
