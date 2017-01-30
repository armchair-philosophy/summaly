/// <reference types="node" />
import * as URL from 'url';
export declare function test(url: URL.Url): boolean;
export declare function summary(url: URL.Url): Promise<{
    title: string;
    icon: string;
    description: string;
    thumbnail: string;
    sitename: string;
}>;
