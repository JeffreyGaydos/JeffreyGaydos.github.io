import React from 'react';
import { Component } from 'react';

class RSSFeed extends Component {
    constructor(props) {
        super(props);
        this.state={
            menu: false,
        }

        document.title = "Tank Encyclopedia - RSS Feed";
    }
    
    render() {
        return (
            <>
                {`<?xml version="1.0" encoding="utf-8"?>
                <rss version="2.0">
                <channel>
                <title>Tank Encyclopedia RSS Feed - Hand Built over at by JeffreyGaydos.github.io!</title>
                <link>https://www.makeuseof.com/</link>
                <description>Pings when new articles are added!</description>
                <lastBuildDate>Wed, October 11 2023</lastBuildDate>
                <item>
                <title>Italian big gun</title>
                <link>https://tanks-encyclopedia.com/category/ww2-italian-at-weapon/</link>
                <guid>https://tanks-encyclopedia.com/category/ww2-italian-at-weapon/</guid>
                <description>Idk some big Italian gun or something...</description>
                <pubDate>Wed, October 11 2023</pubDate>
                </item>
                </channel>
                </rss>`}
            </>
        );
    }
}

export default RSSFeed;