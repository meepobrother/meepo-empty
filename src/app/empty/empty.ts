import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'empty',
    templateUrl: './empty.html',
    styleUrls: ['./empty.scss'],
    encapsulation: ViewEncapsulation.None
})

export class EmptyComponent implements OnInit {
    @Input() image: string = 'https://yongche.baidu.com/static/webapp/widget/unionRoute/images/no_be11085_be11085.png';
    @Input() title: string = '暂无数据';
    constructor() { }
    ngOnInit() { }
}