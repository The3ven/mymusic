import { Component, OnInit, ViewChild } from '@angular/core';
import { IonApp } from '@ionic/angular/standalone';
import { IonRange, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import {
  play,
  playSkipForwardOutline,
  playSkipBackOutline,
  pause,
  close,
  chevronDownOutline,
} from 'ionicons/icons';
import { StorageService } from '../services/storage.service'; // Adjust the path as necessary

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class SongsPage implements OnInit {
  @ViewChild('range', { static: false }) range!: IonRange;

  songs = [
    // BANGLA SONG
    {
      title: 'Aami Tomar Kache',
      subtitle: 'Arijit Singh',
      img: 'assets/img/bangla/aami_tomar_kache.jpg',
      path: '/assets/songs/bangla/Aami_Tomar_Kache.mp3',
    },
    {
      title: 'Aashona',
      subtitle: 'Arijit Singh',
      img: 'assets/img/bangla/aashona.jpg',
      path: '/assets/songs/bangla/Aashona.mp3',
    },
    {
      title: 'Boba Tunnel',
      subtitle: 'Anupam Roy',
      img: 'assets/img/bangla/boba_tunnel.jpg',
      path: '/assets/songs/bangla/Boba_Tunnel.mp3',
    },
    {
      title: 'Bojhena Shey Bojhena',
      subtitle: 'Arijit Singh',
      img: 'assets/img/bangla/bojhena_shey_bojhena.jpg',
      path: '/assets/songs/bangla/Bojhena_Shey_Bojhena.mp3',
    },
    {
      title: 'Egiye de | Shudhu Tomari Jonyo',
      subtitle: 'Shudhu Tomari Jonyo',
      img: 'assets/img/bangla/egiye_de.jpg',
      path: '/assets/songs/bangla/Egiye_de_Shudhu_Tomari_Jonyo.mp3',
    },
    {
      title: 'Lal Shari Poriya Konna',
      subtitle: 'SHOHAG',
      img: 'assets/img/bangla/lal_shari_poriya_konna.jpg',
      path: '/assets/songs/bangla/Lal_Shari_Poriya_Konna.mp3',
    },
    {
      title: 'MONTA RE',
      subtitle: 'T-Series',
      img: 'assets/img/bangla/monta_re.jpg',
      path: '/assets/songs/bangla/Monta_Re.mp3',
    },
    {
      title: 'Ore Manwa Re',
      subtitle: 'T-Series Bangla',
      img: 'assets/img/bangla/ore_manwa_re.jpg',
      path: '/assets/songs/bangla/Ore_Manwa_Re.mp3',
    },
    {
      title: 'Tomake Chai',
      subtitle: 'Gangster',
      img: 'assets/img/bangla/tomake_chai.jpg',
      path: '/assets/songs/bangla/Tomake_Chai.mp3',
    },

    //   ENGLISH SONGS NOW

    {
      title: '7 rings',
      subtitle: 'Ariana Grande',
      img: 'assets/img/english/7_rings.jpg',
      path: '/assets/songs/english/7_rings.mp3',
    },
    {
      title: '10,000 Hours',
      subtitle: 'Dan + Shay, Justin Bieber',
      img: 'assets/img/english/10000_hours.jpg',
      path: '/assets/songs/english/10,000_hours.mp3',
    },
    {
      title: 'Baby',
      subtitle: 'Justin Bieber',
      img: 'assets/img/english/baby.jpg',
      path: '/assets/songs/english/Baby.mp3',
    },
    {
      title: 'bloodline',
      subtitle: 'Ariana Grande',
      img: 'assets/img/english/bloodline.jpg',
      path: '/assets/songs/english/bloodline.mp3',
    },
    {
      title: 'Cruel Summer',
      subtitle: 'Taylor Swift',
      img: 'assets/img/english/cruel_summer.jpg',
      path: '/assets/songs/english/Cruel_Summer.mp3',
    },
    {
      title: 'Dark Horse',
      subtitle: 'Katy Perry',
      img: 'assets/img/english/dark_horse.jpg',
      path: '/assets/songs/english/Dark_Horse.mp3',
    },
    {
      title: 'Die For You',
      subtitle: 'The Weeknd',
      img: 'assets/img/english/die_for_you.jpg',
      path: '/assets/songs/english/Die_For_You.mp3',
    },
    {
      title: 'Die With A Smile',
      subtitle: 'Lady Gaga',
      img: 'assets/img/english/die_with_a_smile.jpg',
      path: '/assets/songs/english/Die_With_A_Smile.mp3',
    },
    {
      title: 'Gangsta',
      subtitle: 'Kehlani',
      img: 'assets/img/english/gangsta.jpg',
      path: '/assets/songs/english/Gangsta.mp3',
    },
    {
      title: 'Him & I',
      subtitle: 'G-Eazy, Halsey',
      img: 'assets/img/english/him_and_i.jpg',
      path: '/assets/songs/english/Him_&_I.mp3',
    },
    {
      title: 'Into You',
      subtitle: 'Ariana Grande',
      img: 'assets/img/english/into_you.jpg',
      path: '/assets/songs/english/Into_You.mp3',
    },
    {
      title: 'Lover',
      subtitle: 'Taylor Swift',
      img: 'assets/img/english/lover.jpg',
      path: '/assets/songs/english/Lover.mp3',
    },
    {
      title: 'Perfect',
      subtitle: 'Ed Sheeran',
      img: 'assets/img/english/perfect.jpg',
      path: '/assets/songs/english/Perfect.mp3',
    },
    {
      title: 'Shameless',
      subtitle: 'The Weeknd',
      img: 'assets/img/english/shameless.jpg',
      path: '/assets/songs/english/Shameless.mp3',
    },
    {
      title: 'Slut!',
      subtitle: 'Demi Lovato',
      img: 'assets/img/english/slut.jpg',
      path: '/assets/songs/english/Slut.mp3',
    },
    {
      title: 'Strawberry & Cigarettes',
      subtitle: 'Troye Sivan',
      img: 'assets/img/english/strawberry_cigarettes.jpg',
      path: '/assets/songs/english/Strawberry_&_Cigarettes.mp3',
    },
    {
      title: 'Stuck with U',
      subtitle: 'Ariana Grande, Justin Bieber',
      img: 'assets/img/english/stuck_with_u.jpg',
      path: '/assets/songs/english/Stuck_with_U.mp3',
    },
    {
      title: "we can't be friends",
      subtitle: 'Unknown Artist',
      img: 'assets/img/english/we_cant_be_friends.jpg',
      path: '/assets/songs/english/we_cant_be_friends.mp3',
    },
    {
      title: "We Don't Talk Anymore",
      subtitle: 'Charlie Puth, Selena Gomez',
      img: 'assets/img/english/we_dont_talk_anymore.jpg',
      path: '/assets/songs/english/We_Dont_Talk_Anymore.mp3',
    },

    // HINDI SONGS
    {
      title: 'Bulleya',
      subtitle: 'Papon and Amit Mishra',
      img: 'assets/img/bollywood/Bulleya.jpg',
      path: '/assets/songs/bollywood/Bulleya.mp3',
    },
    {
      title: 'Hale Dil Tujhko Sunata',
      subtitle: 'Harshit Saxena',
      img: 'assets/img/bollywood/Hale_Dil_Tujhko_Sunata.jpg',
      path: '/assets/songs/bollywood/Hale_Dil_Tujhko_Sunata.mp3',
    },
    {
      title: 'Isq Risk',
      subtitle: 'Javed Ali',
      img: 'assets/img/bollywood/Isq_Risk.jpg',
      path: '/assets/songs/bollywood/Isq_Risk.mp3',
    },
    {
      title: 'Ishq',
      subtitle: 'Sukhwinder Singh and Sapna Awasthi',
      img: 'assets/img/bollywood/Ishq.jpg',
      path: '/assets/songs/bollywood/Ishq.mp3',
    },
    {
      title: 'JO TUM MERE HO',
      subtitle: 'Anuv Jain',
      img: 'assets/img/bollywood/JO_TUM_MERE_HO.jpg',
      path: '/assets/songs/bollywood/Jo_Tum_Mere_Ho.mp3',
    },
    {
      title: 'Mast Magan',
      subtitle: 'Arijit Singh and Chinmayi Sripada',
      img: 'assets/img/bollywood/Mast_Magan.jpg',
      path: '/assets/songs/bollywood/Mast_Magan.mp3',
    },
    {
      title: 'Saaiyaan',
      subtitle: 'Kailash Kher',
      img: 'assets/img/bollywood/Saaiyaan.jpg',
      path: '/assets/songs/bollywood/Saaiyaan.mp3',
    },
    {
      title: 'Tera Hone Laga Hoon',
      subtitle: 'Atif Aslam and Alisha Chinai',
      img: 'assets/img/bollywood/Tera_Hone_Laga_Hoon.jpg',
      path: '/assets/songs/bollywood/Tera_Hone_Laga_Hoon.mp3',
    },
    {
      title: 'Tu Har Lamha',
      subtitle: 'Arijit Singh',
      img: 'assets/img/bollywood/Tu_Har_Lamha.jpg',
      path: '/assets/songs/bollywood/Tu_Har_Lamha.mp3',
    },
  ];

  // Current Song Details
  currTitle: string;
  currSubtitle: string;
  currImage: string;
  currentSecsText: string;
  durationText: string;

  // progress bar value
  progress: number;

  // current song index
  currentIdx: number;

  // toggle for play/pause button
  isPlaying: boolean;

  // track of ion-range touch
  isTouched: boolean;

  // ion range texts
  currSecsText: string;
  // durationText:string = "";

  // ion range value
  currRangeTime: number;
  maxRangeValue: number;

  // Current Song
  currSong!: HTMLAudioElement;

  // Upnext song details
  upNextImg: string;
  upNextTitle: string;
  upNextSubtitle: string;

  fullPlayer!: HTMLElement;
  miniPlayer!: HTMLElement;

  constructor(private storageService: StorageService) {
    addIcons({
      play,
      playSkipForwardOutline,
      playSkipBackOutline,
      pause,
      close,
      chevronDownOutline,
    });
    this.progress = 0;
    this.currentIdx = 0;
    this.isPlaying = false;
    this.currTitle = '';
    this.currSubtitle = '';
    this.currImage = '';
    this.currentSecsText = '';
    this.durationText = '';
    this.isTouched = false;
    this.currSecsText = '';
    this.currRangeTime = 0;
    this.maxRangeValue = 0;
    this.upNextImg = '';
    this.upNextTitle = '';
    this.upNextSubtitle = '';
    this.fullPlayer = document.getElementById('fullPlayer') as HTMLElement;
    this.miniPlayer = document.getElementById('miniPlayer') as HTMLElement;
  }

  ngOnInit() {
    this.storageService
      .getItem('current_song_index')
      .then(async (index) => {
        if (!index) {
          index = 0;
        }
        this.currentIdx = index;
        this.setPlayer();
      })
      .catch(async (err) => {
        this.currentIdx = 0;
        this.setPlayer();
      });

    this.fullPlayer = document.getElementById('fullPlayer') as HTMLElement;
    this.miniPlayer = document.getElementById('miniPlayer') as HTMLElement;
    if (this.miniPlayer) {
      this.miniPlayer.style.bottom = '0px';
    }
  }

  setPlayer() {
    this.currTitle = this.songs[this.currentIdx].title;
    this.currSubtitle = this.songs[this.currentIdx].subtitle;
    this.currImage = this.songs[this.currentIdx].img;
    this.currSong = new Audio(this.songs[this.currentIdx].path);

    const nextIdx = Number(this.songIndexByName(this.currTitle)) + 1;
    this.upNextTitle = this.songs[nextIdx].title;
    this.upNextSubtitle = this.songs[nextIdx].subtitle;
    this.upNextImg = this.songs[nextIdx].img;
  }

  saveCurrentSongIndex = async (index: number) => {
    await this.storageService.setItem('current_song_index', index);
  };

  playSong(title: string, subTitle: string, img: string, song: string) {
    // if a song plays, stop that
    if (this.currSong != null) {
      this.currSong.pause();
    }

    // open full player view

    // const fullPlayer = document.getElementById("fullPlayer") as HTMLElement;
    if (this.fullPlayer) {
      this.fullPlayer.style.bottom = '0px';
    }

    // set current song details
    this.currTitle = title;
    this.currSubtitle = subTitle;
    this.currImage = img;

    // set Upcoming song by current song index

    var index = this.songIndexByName(this.currTitle); //this.songs.findIndex(x => x.title == this.currTitle);

    if (this.currentIdx != index) {
      this.currentIdx = index;
      // Set last play song for next App opening
      this.saveCurrentSongIndex(index);
    }

    // Current Song Audio
    this.currSong = new Audio(song);

    this.currSong.play().then(() => {
      // Total Song Duration
      this.durationText = this.sToTime(this.currSong.duration);
      // set max range value
      this.maxRangeValue = Number(
        this.currSong.duration.toFixed(2).toString().substring(0, 5)
      );

      if (index + 1 == this.songs.length) {
        this.upNextImg = this.songs[0].img;
        this.upNextTitle = this.songs[0].title;
        this.upNextSubtitle = this.songs[0].subtitle;
      }
      // else set next song info from upnext index song
      else {
        this.upNextImg = this.songs[index + 1].img;
        this.upNextTitle = this.songs[index + 1].title;
        this.upNextSubtitle = this.songs[index + 1].subtitle;
      }
      this.isPlaying = true;
    });
    this.addEvent();
  }

  addEvent() {
    this.currSong.addEventListener('timeupdate', () => {
      // update some infos as song plays on

      // if ion range not touched then do update
      if (!this.isTouched) {
        // update ion range value
        this.currRangeTime = Number(
          this.currSong.currentTime.toFixed(2).toString().substring(0, 5)
        );

        // update current seconds text
        this.currSecsText = this.sToTime(this.currSong.currentTime);

        // update progress bar (in minimize view)
        this.progress =
          Math.floor(this.currSong.currentTime) /
          Math.floor(this.currSong.duration);
        if (this.currSong.currentTime == this.currSong.duration) {
          this.playNext();
        }
      }
    });
  }

  sToTime(t: any) {
    return (
      this.padZero(parseInt(String((t / 60) % 60))) +
      ':' +
      this.padZero(parseInt(String(t % 60)))
    );
  }

  padZero(v: any) {
    return v < 10 ? '0' + v : v;
  }

  songIndexByName(title: string) {
    return this.songs.findIndex((x) => x.title == title);
  }

  playNext() {
    // get Current song index
    var index = this.songIndexByName(this.currTitle); //this.songs.findIndex(x => x.title == this.currTitle);

    // if current song is last then play first song
    var nextIndex;
    if (index + 1 == this.songs.length) {
      nextIndex = 0;
    }
    // else play next song
    else {
      nextIndex = index + 1;
    }

    this.playSong(
      this.songs[nextIndex].title,
      this.songs[nextIndex].subtitle,
      this.songs[nextIndex].img,
      this.songs[nextIndex].path
    );
  }

  playPrev() {
    // get Current song index
    var index = this.songIndexByName(this.currTitle); //this.songs.findIndex(x => x.title == this.currTitle);

    if (index == 0) {
      var lastIndex = this.songs.length - 1;
      this.playSong(
        this.songs[lastIndex].title,
        this.songs[lastIndex].subtitle,
        this.songs[lastIndex].img,
        this.songs[lastIndex].path
      );
    }
    // else play previous song
    else {
      var prevIndex = index - 1;
      this.playSong(
        this.songs[prevIndex].title,
        this.songs[prevIndex].subtitle,
        this.songs[prevIndex].img,
        this.songs[prevIndex].path
      );
    }
  }

  // minimize full player view
  minimize() {
    // const fullPlayer = document.getElementById("fullPlayer") as HTMLElement;
    if (this.fullPlayer) {
      this.fullPlayer.style.bottom = '-1000px';
    }
    // const miniPlayer = document.getElementById("miniPlayer") as HTMLElement;
    if (this.miniPlayer) {
      this.miniPlayer.style.bottom = '0px';
    }
  }

  // maximizing full player view
  maximize() {
    // const fullPlayer = document.getElementById("fullPlayer") as HTMLElement;
    if (this.fullPlayer) {
      this.fullPlayer.style.bottom = '0px';
    }
    // const miniPlayer = document.getElementById("miniPlayer") as HTMLElement;
    if (this.miniPlayer) {
      this.miniPlayer.style.bottom = '-100px';
    }
  }

  // pause current playing song
  pause() {
    this.currSong.pause();
    this.isPlaying = false;
  }

  // play current playing song

  play() {
    this.currSong.play();
    this.isPlaying = true;
    // Total Song Duration
    this.durationText = this.sToTime(this.currSong.duration);
    // set max range value
    this.maxRangeValue = Number(
      this.currSong.duration.toFixed(2).toString().substring(0, 5)
    );
    this.addEvent();
  }

  cancel() {
    // const miniPlayer = document.getElementById("miniPlayer") as HTMLElement;
    if (this.miniPlayer) {
      this.miniPlayer.style.bottom = '-100px';
    }
    this.currImage = '';
    this.currTitle = '';
    this.progress = 0;
    this.currSong.pause();
    this.isPlaying = false;
  }

  // on touching ion-range
  touchStart() {
    this.isTouched = true;
    this.currRangeTime = Number(this.range.value);
  }

  // on moving ion-range
  // update current seconds text
  touchMove() {
    this.currSecsText = this.sToTime(this.range.value);
  }

  // on touch release/end
  touchEnd() {
    this.isTouched = false;
    this.currSong.currentTime = Number(this.range.value);
    this.currSecsText = this.sToTime(this.currSong.currentTime);
    this.currRangeTime = Number(
      this.currSong.currentTime.toFixed(2).toString().substring(0, 5)
    );
    if (this.isPlaying) {
      this.currSong.play();
    }
  }
}
