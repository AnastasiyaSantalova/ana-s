import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TAGS } from 'src/assets/mocked/tags-cloud-items';

@Injectable({
	providedIn: 'root'
})
export class TagsService {
	getAllTags() {
		const tags = of(TAGS);

		return tags;
	}
}
