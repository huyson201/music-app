
interface AuthProfile {
    name: string

    age: number

    subscriber: number

    realname: string

    bootstrap: number

    playcount: number

    artist_count: number

    playlists: number

    track_count: number

    album_count: number

    image: { size: string, ["#text"]: string }[]
    registered: {
        unixtime: string,
        #text: number
    }
    country: string
    gender: string

    url: string

    type: string

}