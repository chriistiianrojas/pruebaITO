import { Injectable, OnDestroy } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { TranslateService } from "@ngx-translate/core";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Injectable()
export class MaterialPaginatorIntl extends MatPaginatorIntl implements OnDestroy {

    private onDestroy$: Subject<boolean> = new Subject();

    constructor(private translateService: TranslateService) {
        super();
        this.getPaginatorIntl();
    }

    /**
        * (Material function) Associated function to set the range label of global paginators
        * @param page
        * @param pageSize
        * @param length
        * @returns Range label translated to spanish
      **/
    intlRangeLabel = (page: number, pageSize: number, length: number) => {
        if (length == 0 || pageSize == 0) { return this.translateService.instant('NOITEMSPAGINATOR'); }

        length = Math.max(length, 0);

        const startIndex = page * pageSize;

        // If the start index exceeds the list length, do not try and fix the end index to the end.
        const endIndex = startIndex < length ?
            Math.min(startIndex + pageSize, length) :
            startIndex + pageSize;

        return this.translateService.instant('RANGELABELPAGINATOR', { startIndex: startIndex + 1, endIndex, length });
    }

    /**
        * Set all paginator labels to current language
    **/
    getPaginatorIntl() {

        this.translateService.stream(['ITEMSPERPAGEPAGINATOR', 'NEXTPAGEPAGINATOR', 'PREVIOUSPAGEPAGINATOR', 'FIRSTPAGEPAGINATOR', 'LASTPAGEPAGINATOR'])
            .pipe(takeUntil(this.onDestroy$))
            .subscribe(translation => {
                this.itemsPerPageLabel = translation['ITEMSPERPAGEPAGINATOR'];
                this.nextPageLabel = translation['NEXTPAGEPAGINATOR'];
                this.previousPageLabel = translation['PREVIOUSPAGEPAGINATOR'];
                this.firstPageLabel = translation['FIRSTPAGEPAGINATOR'];
                this.lastPageLabel = translation['LASTPAGEPAGINATOR'];
                this.getRangeLabel = this.intlRangeLabel.bind(this);
                this.changes.next();
            });
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

}