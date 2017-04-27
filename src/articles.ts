export interface IArticle {
    id: string;
    title: string;
    content: string;
    published_date: string;
    source: string;
    image: string;
    url: string;
}

export const ARTICLES: IArticle[] = [{
        title: "Secret payments to players and agents focus of HMRC investigation",
        published_date: "2017-04-27 07:45:05",
        url: "http://www.bbc.co.uk/sport/football/39729853",
        id: "http://www.bbc.co.uk/sport/football/39729853",
        source: "bbc",
        image: "http://c.files.bbci.co.uk/0CF7/production/_95791330_gettyimages-178915271.jpg",
        content: "Secret payments made to players, their agents or third parties is the focus of a tax fraud investigation by British and French authorities."
    },
    {
        title: "Carrick is 'one of the best I've seen' - Guardiola",
        published_date: "2017-04-26 21:34:49",
        url: "http://www.bbc.co.uk/sport/football/39723573",
        id: "http://www.bbc.co.uk/sport/football/39723573",
        source: "bbc",
        image: "http://c.files.bbci.co.uk/DF65/production/_95798175_hi038988023.jpg",
        content: "Manchester City boss Pep Guardiola calls Manchester United's Michael Carrick \"one of the best midfielders I've ever seen\"."
    },
    {
        title: "Manchester City v Manchester United: When the derby was last on a Thursday...",
        published_date: "2017-04-27 05:09:20",
        url: "http://www.bbc.co.uk/sport/football/39698274",
        id: "http://www.bbc.co.uk/sport/football/39698274",
        source: "bbc",
        image: "http://c.files.bbci.co.uk/18250/production/_95769889_andreikanchelskis_getty.jpg",
        content: "The last time Manchester United and Manchester City played each other on a Thursday was 23 years ago in November 1994 - a memorable night for the red half of the city."
    },
    {
        title: "'Guardiola's struggles prove how well Pellegrini did'",
        published_date: "2017-04-27 11:27:49",
        url: "http://www.bbc.co.uk/sport/football/39697265",
        id: "http://www.bbc.co.uk/sport/football/39697265",
        source: "bbc",
        image: "http://c.files.bbci.co.uk/12D29/production/_95779077_untitledcollage.jpg",
        content: "Manchester City boss Pep Guardiola's first season in English football shows how Manuel Pellegrini was underestimated, says Martin Demichelis."
    },
    {
        title: "Spurs fan attacks fellow supporter in 'Chelsea mix-up'",
        published_date: "2017-04-27 09:14:06",
        url: "http://www.bbc.co.uk/news/uk-england-london-39729568",
        id: "http://www.bbc.co.uk/news/uk-england-london-39729568",
        source: "bbc",
        image: "http://c.files.bbci.co.uk/4D1C/production/_95804791_07a54c0a-c4ae-43d8-83e9-367c8eafdef5.jpg",
        content: "Spurs fan Michael Voller suffered a broken skull and damage to his cheekbone and eye-socket."
    },
    {
        title: "Highlights: Borussia Dortmund beat Bayern Munich 3-2 in DB Cup semi-final",
        published_date: "2017-04-27 10:43:42",
        url: "http://www.bbc.co.uk/sport/football/39731518",
        id: "http://www.bbc.co.uk/sport/football/39731518",
        source: "bbc",
        image: "http://c.files.bbci.co.uk/2D28/production/_95806511_p05180dm.jpg",
        content: "Watch all the goals as Borussia Dortmund beat rivals Bayern Munich 3-2 to win the DFB Cup semi-final at the Allianz Arena."
    },
    {
        title: "Three-game ban for Birmingham's Robinson",
        published_date: "2017-04-27 10:17:29",
        url: "http://www.bbc.co.uk/sport/football/39732855",
        id: "http://www.bbc.co.uk/sport/football/39732855",
        source: "bbc",
        thumbnail: "http://c.files.bbci.co.uk/121C4/production/_95808147_pa-30967335.jpg",
        content: "Birmingham City club captain Paul Robinson will miss his side's final two games after being banned for violent conduct."
    }
]