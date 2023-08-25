import { Component } from '@angular/core';
import { TagsService } from 'src/app/services/tags.service';
import { TagsCloudItem } from 'src/app/types/types';

@Component({
	selector: 'app-skills-page',
	templateUrl: './skills-page.component.html',
	styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent {
	tags: TagsCloudItem[];

	constructor(private tagsService: TagsService) {}

    getTags() {
        this.tagsService.getAllTags().subscribe(tags => {
            this.tags = tags;
        });
    }

    ngOnInit() {
        this.getTags();
    }
}
