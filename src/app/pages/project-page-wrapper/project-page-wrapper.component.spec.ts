import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPageWrapperComponent } from './project-page-wrapper.component';

describe('ProjectPageWrapperComponent', () => {
  let component: ProjectPageWrapperComponent;
  let fixture: ComponentFixture<ProjectPageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPageWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
