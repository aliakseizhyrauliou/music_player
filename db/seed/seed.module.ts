import { Module } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { AlbumEntity } from 'src/artist/entity/album.entity/album.entity';
import { ArtistEntity } from 'src/artist/entity/artist.entity/artist.entity';
import { TrackEntity } from 'src/artist/entity/track.entity/track.entity';
import { UserEntity } from 'src/user/entity/user.entity/user.entity';
import { Repository } from 'typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ArtistEntity, UserEntity, AlbumEntity, TrackEntity])],
})

export class SeedModule {

    constructor( @InjectRepository(ArtistEntity)
    private artistRepository : Repository<ArtistEntity>,
    @InjectRepository(AlbumEntity)
    private albumEntity: Repository<AlbumEntity>,
    @InjectRepository(TrackEntity)
    private trackEntity: Repository<TrackEntity>)
    {

    }

    public async SeedArtist() : Promise<any>{

        // RADIOHEAD

        const Radiohead = new ArtistEntity();
        Radiohead.name = 'Radiohead';

        const InRainbows = new AlbumEntity();
        InRainbows.name = 'In Rainbows';
        InRainbows.artist = Radiohead;

        const FifteenStep = new TrackEntity();
        FifteenStep.name = '15 Step';
        FifteenStep.artist = Radiohead;
        FifteenStep.album = InRainbows;

        const Bodysnatchers = new TrackEntity();
        Bodysnatchers.name = 'Bodysnatchers';
        Bodysnatchers.artist = Radiohead;
        Bodysnatchers.album = InRainbows;

        const Nude = new TrackEntity();
        Nude.name = 'Nude';
        Nude.artist = Radiohead;
        Nude.album = InRainbows;

        const WeirdFishes = new TrackEntity();
        WeirdFishes.name = 'Weird fishes/Arpeggi';
        WeirdFishes.artist = Radiohead;
        WeirdFishes.album = InRainbows;

        const AllINeed = new TrackEntity();
        AllINeed.name = 'All I Need';
        AllINeed.artist = Radiohead;
        AllINeed.album = InRainbows;

        const FaustArp = new TrackEntity();
        FaustArp.name = 'Faust Arp';
        FaustArp.artist = Radiohead;
        FaustArp.album = InRainbows;

        const Reckoner = new TrackEntity();
        Reckoner.name = 'Reckoner';
        Reckoner.artist = Radiohead;
        Reckoner.album = InRainbows;

        const HouseOfCards = new TrackEntity();
        HouseOfCards.name = 'House Of Cards';
        HouseOfCards.artist = Radiohead;
        HouseOfCards.album = InRainbows;

        const JigsawFallingIntoPlace = new TrackEntity();
        JigsawFallingIntoPlace.name = 'Jigsaw Falling Into Place';
        JigsawFallingIntoPlace.artist = Radiohead;
        JigsawFallingIntoPlace.album = InRainbows;

        const Videotape = new TrackEntity();
        Videotape.name = 'Videotape';
        Videotape.artist = Radiohead;
        Videotape.album = InRainbows;

        const OKComputer = new AlbumEntity();
        OKComputer.name = 'OK Computer';
        OKComputer.artist = Radiohead;

        const Airbag = new TrackEntity();
        Airbag.name = 'Airbag';
        Airbag.artist = Radiohead;
        Airbag.album = OKComputer;

        const ParanoidAndroid = new TrackEntity();
        ParanoidAndroid.name = 'Paranoid Android';
        ParanoidAndroid.artist = Radiohead;
        ParanoidAndroid.album = OKComputer;

        const SubterraneanHomesickAlien = new TrackEntity();
        SubterraneanHomesickAlien.name = 'Subterranean Homesick Alien';
        SubterraneanHomesickAlien.artist = Radiohead;
        SubterraneanHomesickAlien.album = OKComputer;

        const ExitMusic = new TrackEntity();
        ExitMusic.name = 'Exit Music (For a Film)';
        ExitMusic.artist = Radiohead;
        ExitMusic.album = OKComputer;

        const LetDown = new TrackEntity();
        LetDown.name = 'Let Down';
        LetDown.artist = Radiohead;
        LetDown.album = OKComputer;

        const KarmaPolice = new TrackEntity();
        KarmaPolice.name = 'Karma Police';
        KarmaPolice.artist = Radiohead;
        KarmaPolice.album = OKComputer;

        const FitterHappier = new TrackEntity();
        FitterHappier.name = 'Fitter Happier';
        FitterHappier.artist = Radiohead;
        FitterHappier.album = OKComputer;

        const Electioneering = new TrackEntity();
        Electioneering.name = 'Electioneering';
        Electioneering.artist = Radiohead;
        Electioneering.album = OKComputer;

        const ClimbingUpTheWalls = new TrackEntity();
        ClimbingUpTheWalls.name = 'Climbing Up the Walls';
        ClimbingUpTheWalls.artist = Radiohead;
        ClimbingUpTheWalls.album = OKComputer;

        const NoSurprises = new TrackEntity();
        NoSurprises.name = 'No Surprises';
        NoSurprises.artist = Radiohead;
        NoSurprises.album = OKComputer;

        const Lucky = new TrackEntity();
        Lucky.name = 'Lucky';
        Lucky.artist = Radiohead;
        Lucky.album = OKComputer;

        const TheTourist = new TrackEntity();
        TheTourist.name = 'The Tourist';
        TheTourist.artist = Radiohead;
        TheTourist.album = OKComputer;

        // RED HOT CHILI PEPPERS

        const RedHotChiliPeppers = new ArtistEntity();
        RedHotChiliPeppers.name = 'Red Hot Chili Peppers';

        const StadiumArcadium = new AlbumEntity();
        StadiumArcadium.name = 'Stadium Arcadium';
        StadiumArcadium.artist = RedHotChiliPeppers;

        const DaniCalifornia = new TrackEntity();
        DaniCalifornia.name = 'Dani California';
        DaniCalifornia.artist = RedHotChiliPeppers;
        DaniCalifornia.album = StadiumArcadium;

        const SnowHeyOh = new TrackEntity();
        SnowHeyOh.name = 'Snow (Hey Oh)';
        SnowHeyOh.artist = RedHotChiliPeppers;
        SnowHeyOh.album = StadiumArcadium;

        const Charlie = new TrackEntity();
        Charlie.name = 'Charlie';
        Charlie.artist = RedHotChiliPeppers;
        Charlie.album = StadiumArcadium;

        const HumpDeBump = new TrackEntity();
        HumpDeBump.name = 'Hump de Bump';
        HumpDeBump.artist = RedHotChiliPeppers;
        HumpDeBump.album = StadiumArcadium;

        const ShesOnly18 = new TrackEntity();
        ShesOnly18.name = "She's Only 18";
        ShesOnly18.artist = RedHotChiliPeppers;
        ShesOnly18.album = StadiumArcadium;

        const SlowCheetah = new TrackEntity();
        SlowCheetah.name = 'Slow Cheetah';
        SlowCheetah.artist = RedHotChiliPeppers;
        SlowCheetah.album = StadiumArcadium;

        const TortureMe = new TrackEntity();
        TortureMe.name = 'Torture Me';
        TortureMe.artist = RedHotChiliPeppers;
        TortureMe.album = StadiumArcadium;

        const StripMyMind = new TrackEntity();
        StripMyMind.name = 'Strip My Mind';
        StripMyMind.artist = RedHotChiliPeppers;
        StripMyMind.album = StadiumArcadium;

        const EspeciallyInMichigan = new TrackEntity();
        EspeciallyInMichigan.name = 'Especially in Michigan';
        EspeciallyInMichigan.artist = RedHotChiliPeppers;
        EspeciallyInMichigan.album = StadiumArcadium;

        const Warlocks = new TrackEntity();
        Warlocks.name = 'Warlocks';
        Warlocks.artist = RedHotChiliPeppers;
        Warlocks.album = StadiumArcadium;

        const CmonGirl = new TrackEntity();
        CmonGirl.name = "C'mon Girl";
        CmonGirl.artist = RedHotChiliPeppers;
        CmonGirl.album = StadiumArcadium;

        const WetSand = new TrackEntity();
        WetSand.name = 'Wet Sand';
        WetSand.artist = RedHotChiliPeppers;
        WetSand.album = StadiumArcadium;

        const Hey = new TrackEntity();
        Hey.name = 'Hey';
        Hey.artist = RedHotChiliPeppers;
        Hey.album = StadiumArcadium;

        const DesecrationSmile = new TrackEntity();
        DesecrationSmile.name = 'Desecration Smile';
        DesecrationSmile.artist = RedHotChiliPeppers;
        DesecrationSmile.album = StadiumArcadium;

        const TellMeBaby = new TrackEntity();
        TellMeBaby.name = 'Tell Me Baby';
        TellMeBaby.artist = RedHotChiliPeppers;
        TellMeBaby.album = StadiumArcadium;

        const HardToConcentrate = new TrackEntity();
        HardToConcentrate.name = 'Hard to Concentrate';
        HardToConcentrate.artist = RedHotChiliPeppers;
        HardToConcentrate.album = StadiumArcadium;

        const TwentyFirstCentury = new TrackEntity();
        TwentyFirstCentury.name = '21st Century';
        TwentyFirstCentury.artist = RedHotChiliPeppers;
        TwentyFirstCentury.album = StadiumArcadium;

        const SheLooksToMe = new TrackEntity();
        SheLooksToMe.name = 'She Looks to Me';
        SheLooksToMe.artist = RedHotChiliPeppers;
        SheLooksToMe.album = StadiumArcadium;

        const EvenYouBrutus = new TrackEntity();
        EvenYouBrutus.name = 'Even You Brutus';
        EvenYouBrutus.artist = RedHotChiliPeppers;
        EvenYouBrutus.album = StadiumArcadium;

        const StormInATeacup = new TrackEntity();
        StormInATeacup.name = 'Storm in a Teacup';
        StormInATeacup.artist = RedHotChiliPeppers;
        StormInATeacup.album = StadiumArcadium;

        const WeBelieve = new TrackEntity();
        WeBelieve.name = 'We Believe';
        WeBelieve.artist = RedHotChiliPeppers;
        WeBelieve.album = StadiumArcadium;

        const TurnItAgain = new TrackEntity();
        TurnItAgain.name = 'Turn It Again';
        TurnItAgain.artist = RedHotChiliPeppers;
        TurnItAgain.album = StadiumArcadium;

        const DeathOfAMartian = new TrackEntity();
        DeathOfAMartian.name = 'Death of a Martian';
        DeathOfAMartian.artist = RedHotChiliPeppers;
        DeathOfAMartian.album = StadiumArcadium;

        const NothingToLose = new TrackEntity();
        NothingToLose.name = 'Nothing to Lose';
        NothingToLose.artist = RedHotChiliPeppers;
        NothingToLose.album = StadiumArcadium;

        const SaveThePopulation = new TrackEntity();
        SaveThePopulation.name = 'Save the Population';
        SaveThePopulation.artist = RedHotChiliPeppers;
        SaveThePopulation.album = StadiumArcadium;

        const TheGetaway = new AlbumEntity();
        TheGetaway.name = 'The Getaway';
        TheGetaway.artist = RedHotChiliPeppers;

        const TheGetawayTitleTrack = new TrackEntity();
        TheGetawayTitleTrack.name = 'The Getaway';
        TheGetawayTitleTrack.artist = RedHotChiliPeppers;
        TheGetawayTitleTrack.album = TheGetaway;

        const DarkNecessities = new TrackEntity();
        DarkNecessities.name = 'Dark Necessities';
        DarkNecessities.artist = RedHotChiliPeppers;
        DarkNecessities.album = TheGetaway;

        const WeTurnRed = new TrackEntity();
        WeTurnRed.name = 'We Turn Red';
        WeTurnRed.artist = RedHotChiliPeppers;
        WeTurnRed.album = TheGetaway;

        const TheLongestWave = new TrackEntity();
        TheLongestWave.name = 'The Longest Wave';
        TheLongestWave.artist = RedHotChiliPeppers;
        TheLongestWave.album = TheGetaway;

        const GoodbyeAngels = new TrackEntity();
        GoodbyeAngels.name = 'Goodbye Angels';
        GoodbyeAngels.artist = RedHotChiliPeppers;
        GoodbyeAngels.album = TheGetaway;

        const SickLove = new TrackEntity();
        SickLove.name = 'Sick Love';
        SickLove.artist = RedHotChiliPeppers;
        SickLove.album = TheGetaway;

        const GoRobot = new TrackEntity();
        GoRobot.name = 'Go Robot';
        GoRobot.artist = RedHotChiliPeppers;
        GoRobot.album = TheGetaway;

        const FeastingOnTheFlowers = new TrackEntity();
        FeastingOnTheFlowers.name = 'Feasting On The Flowers';
        FeastingOnTheFlowers.artist = RedHotChiliPeppers;
        FeastingOnTheFlowers.album = TheGetaway;

        const Detroit = new TrackEntity();
        Detroit.name = 'Detroit';
        Detroit.artist = RedHotChiliPeppers;
        Detroit.album = TheGetaway;

        const ThisTiconderoga = new TrackEntity();
        ThisTiconderoga.name = 'This Ticonderoga';
        ThisTiconderoga.artist = RedHotChiliPeppers;
        ThisTiconderoga.album = TheGetaway;

        const Encore = new TrackEntity();
        Encore.name = 'Encore';
        Encore.artist = RedHotChiliPeppers;
        Encore.album = TheGetaway;

        const TheHunter = new TrackEntity();
        TheHunter.name = 'The Hunter';
        TheHunter.artist = RedHotChiliPeppers;
        TheHunter.album = TheGetaway;

        const DreamsOfASamurai = new TrackEntity();
        DreamsOfASamurai.name = 'Dreams Of A Samurai';
        DreamsOfASamurai.artist = RedHotChiliPeppers;
        DreamsOfASamurai.album = TheGetaway;

        // FLEETWOOD MAC

        const FleetwoodMac = new ArtistEntity();
        FleetwoodMac.name = 'Fleetwood Mac';

        const Rumours = new AlbumEntity();
        Rumours.name = 'Rumours';
        Rumours.artist = FleetwoodMac;

        const SecondHandNews = new TrackEntity();
        SecondHandNews.name = 'Second Hand News';
        SecondHandNews.artist = FleetwoodMac;
        SecondHandNews.album = Rumours;

        const Dreams = new TrackEntity();
        Dreams.name = 'Dreams';
        Dreams.artist = FleetwoodMac;
        Dreams.album = Rumours;

        const NeverGoingBackAgain = new TrackEntity();
        NeverGoingBackAgain.name = 'Never Going Back Again';
        NeverGoingBackAgain.artist = FleetwoodMac;
        NeverGoingBackAgain.album = Rumours;

        const DonTStop = new TrackEntity();
        DonTStop.name = "Don't Stop";
        DonTStop.artist = FleetwoodMac;
        DonTStop.album = Rumours;

        const GoYourOwnWay = new TrackEntity();
        GoYourOwnWay.name = 'Go Your Own Way';
        GoYourOwnWay.artist = FleetwoodMac;
        GoYourOwnWay.album = Rumours;

        const Songbird = new TrackEntity();
        Songbird.name = 'Songbird';
        Songbird.artist = FleetwoodMac;
        Songbird.album = Rumours;

        const TheChain = new TrackEntity();
        TheChain.name = 'The Chain';
        TheChain.artist = FleetwoodMac;
        TheChain.album = Rumours;

        const YouMakeLovingFun = new TrackEntity();
        YouMakeLovingFun.name = 'You Make Loving Fun';
        YouMakeLovingFun.artist = FleetwoodMac;
        YouMakeLovingFun.album = Rumours;

        const IDonWannaKnow = new TrackEntity();
        IDonWannaKnow.name = "I Don't Wanna Know";
        IDonWannaKnow.artist = FleetwoodMac;
        IDonWannaKnow.album = Rumours;

        const OhDaddy = new TrackEntity();
        OhDaddy.name = 'Oh Daddy';
        OhDaddy.artist = FleetwoodMac;
        OhDaddy.album = Rumours;

        const GoldDustWoman = new TrackEntity();
        GoldDustWoman.name = 'Gold Dust Woman';
        GoldDustWoman.artist = FleetwoodMac;
        GoldDustWoman.album = Rumours;

        // Pink Floyd

        const PinkFloyd = new ArtistEntity();
        PinkFloyd.name = 'Pink Floyd';

        const TheWall = new AlbumEntity();
        TheWall.name = 'The Wall';
        TheWall.artist = PinkFloyd;

        const InTheFlesh = new TrackEntity();
        InTheFlesh.name = 'In The Flesh';
        InTheFlesh.artist = PinkFloyd;
        InTheFlesh.album = TheWall;

        const TheThinIce = new TrackEntity();
        TheThinIce.name = 'The Thin Ice';
        TheThinIce.artist = PinkFloyd;
        TheThinIce.album = TheWall;

        const AnotherBrickInTheWallPart1 = new TrackEntity();
        AnotherBrickInTheWallPart1.name = 'Another Brick in the Wall, Part 1';
        AnotherBrickInTheWallPart1.artist = PinkFloyd;
        AnotherBrickInTheWallPart1.album = TheWall;

        const TheHappiestDaysOfOurLives = new TrackEntity();
        TheHappiestDaysOfOurLives.name = 'The Happiest Days of Our Lives';
        TheHappiestDaysOfOurLives.artist = PinkFloyd;
        TheHappiestDaysOfOurLives.album = TheWall;

        const AnotherBrickInTheWallPart2 = new TrackEntity();
        AnotherBrickInTheWallPart2.name = 'Another Brick in the Wall, Part 2';
        AnotherBrickInTheWallPart2.artist = PinkFloyd;
        AnotherBrickInTheWallPart2.album = TheWall;

        const Mother = new TrackEntity();
        Mother.name = 'Mother';
        Mother.artist = PinkFloyd;
        Mother.album = TheWall;

        const GoodbyeBlueSky = new TrackEntity();
        GoodbyeBlueSky.name = 'Goodbye Blue Sky';
        GoodbyeBlueSky.artist = PinkFloyd;
        GoodbyeBlueSky.album = TheWall;

        const EmptySpaces = new TrackEntity();
        EmptySpaces.name = 'Empty Spaces';
        EmptySpaces.artist = PinkFloyd;
        EmptySpaces.album = TheWall;

        const YoungLust = new TrackEntity();
        YoungLust.name = 'Young Lust';
        YoungLust.artist = PinkFloyd;
        YoungLust.album = TheWall;

        const OneOfMyTurns = new TrackEntity();
        OneOfMyTurns.name = 'One of My Turns';
        OneOfMyTurns.artist = PinkFloyd;
        OneOfMyTurns.album = TheWall;

        const DonLeaveMeNow = new TrackEntity();
        DonLeaveMeNow.name = "Don't Leave Me Now";
        DonLeaveMeNow.artist = PinkFloyd;
        DonLeaveMeNow.album = TheWall;

        const AnotherBrickInTheWallPart3 = new TrackEntity();
        AnotherBrickInTheWallPart3.name = 'Another Brick in the Wall, Part 3';
        AnotherBrickInTheWallPart3.artist = PinkFloyd;
        AnotherBrickInTheWallPart3.album = TheWall;

        const GoodbyeCruelWorld = new TrackEntity();
        GoodbyeCruelWorld.name = 'Goodbye Cruel World';
        GoodbyeCruelWorld.artist = PinkFloyd;
        GoodbyeCruelWorld.album = TheWall;

        const DarkSideOfTheMoon = new AlbumEntity();
        DarkSideOfTheMoon.name = 'The Dark Side of the Moon';
        DarkSideOfTheMoon.artist = PinkFloyd;

        const SpeakToMe = new TrackEntity();
        SpeakToMe.name = 'Speak to Me';
        SpeakToMe.artist = PinkFloyd;
        SpeakToMe.album = DarkSideOfTheMoon;

        const Breathe = new TrackEntity();
        Breathe.name = 'Breathe';
        Breathe.artist = PinkFloyd;
        Breathe.album = DarkSideOfTheMoon;

        const OnTheRun = new TrackEntity();
        OnTheRun.name = 'On the Run';
        OnTheRun.artist = PinkFloyd;
        OnTheRun.album = DarkSideOfTheMoon;

        const Time = new TrackEntity();
        Time.name = 'Time';
        Time.artist = PinkFloyd;
        Time.album = DarkSideOfTheMoon;

        const TheGreatGigIntheSky = new TrackEntity();
        TheGreatGigIntheSky.name = 'The Great Gig in the Sky';
        TheGreatGigIntheSky.artist = PinkFloyd;
        TheGreatGigIntheSky.album = DarkSideOfTheMoon;

        const Money = new TrackEntity();
        Money.name = 'Money';
        Money.artist = PinkFloyd;
        Money.album = DarkSideOfTheMoon;

        const UsAndThem = new TrackEntity();
        UsAndThem.name = 'Us and Them';
        UsAndThem.artist = PinkFloyd;
        UsAndThem.album = DarkSideOfTheMoon;

        const AnyColourYouLike = new TrackEntity();
        AnyColourYouLike.name = 'Any Colour You Like';
        AnyColourYouLike.artist = PinkFloyd;
        AnyColourYouLike.album = DarkSideOfTheMoon;

        const BrainDamage = new TrackEntity();
        BrainDamage.name = 'Brain Damage';
        BrainDamage.artist = PinkFloyd;
        BrainDamage.album = DarkSideOfTheMoon;

        const Eclipse = new TrackEntity();
        Eclipse.name = 'Eclipse';
        Eclipse.artist = PinkFloyd;
        Eclipse.album = DarkSideOfTheMoon;

        // Foo Fighters

        const FooFighters = new ArtistEntity();
        FooFighters.name = 'Foo Fighters';

        const WastingLight = new AlbumEntity();
        WastingLight.name = 'Wasting Light';
        WastingLight.artist = FooFighters;

        const BridgeBurning = new TrackEntity();
        BridgeBurning.name = 'Bridge Burning';
        BridgeBurning.artist = FooFighters;
        BridgeBurning.album = WastingLight;

        const Rope = new TrackEntity();
        Rope.name = 'Rope';
        Rope.artist = FooFighters;
        Rope.album = WastingLight;

        const DearRosemary = new TrackEntity();
        DearRosemary.name = 'Dear Rosemary';
        DearRosemary.artist = FooFighters;
        DearRosemary.album = WastingLight;

        const WhiteLimo = new TrackEntity();
        WhiteLimo.name = 'White Limo';
        WhiteLimo.artist = FooFighters;
        WhiteLimo.album = WastingLight;

        const Arlandria = new TrackEntity();
        Arlandria.name = 'Arlandria';
        Arlandria.artist = FooFighters;
        Arlandria.album = WastingLight;

        const TheseDays = new TrackEntity();
        TheseDays.name = 'These Days';
        TheseDays.artist = FooFighters;
        TheseDays.album = WastingLight;

        const BackAndForth = new TrackEntity();
        BackAndForth.name = 'Back and Forth';
        BackAndForth.artist = FooFighters;
        BackAndForth.album = WastingLight;

        const AMatterOfTime = new TrackEntity();
        AMatterOfTime.name = 'A Matter of Time';
        AMatterOfTime.artist = FooFighters;
        AMatterOfTime.album = WastingLight;

        const MissTheMisery = new TrackEntity();
        MissTheMisery.name = 'Miss the Misery';
        MissTheMisery.artist = FooFighters;
        MissTheMisery.album = WastingLight;

        const IShouldHaveKnown = new TrackEntity();
        IShouldHaveKnown.name = 'I Should Have Known';
        IShouldHaveKnown.artist = FooFighters;
        IShouldHaveKnown.album = WastingLight;

        const Walk = new TrackEntity();
        Walk.name = 'Walk';
        Walk.artist = FooFighters;
        Walk.album = WastingLight;

        // Travis Scott

        const TravisScott = new ArtistEntity();
        TravisScott.name = 'Travis Scott';

        const Astroworld = new AlbumEntity();
        Astroworld.name = 'Astroworld';
        Astroworld.artist = TravisScott;

        const stargazing = new TrackEntity();
        stargazing.name = 'STARGAZING';
        stargazing.artist = TravisScott;
        stargazing.album = Astroworld;

        const carousel = new TrackEntity();
        carousel.name = 'CAROUSEL';
        carousel.artist = TravisScott;
        carousel.album = Astroworld;

        const sickoMode = new TrackEntity();
        sickoMode.name = 'SICKO MODE';
        sickoMode.artist = TravisScott;
        sickoMode.album = Astroworld;

        const ripScrew = new TrackEntity();
        ripScrew.name = 'R.I.P. SCREW';
        ripScrew.artist = TravisScott;
        ripScrew.album = Astroworld;

        const stopTryingToBeGod = new TrackEntity();
        stopTryingToBeGod.name = 'STOP TRYING TO BE GOD';
        stopTryingToBeGod.artist = TravisScott;
        stopTryingToBeGod.album = Astroworld;

        const noBystanders = new TrackEntity();
        noBystanders.name = 'NO BYSTANDERS';
        noBystanders.artist = TravisScott;
        noBystanders.album = Astroworld;

        const skeletons = new TrackEntity();
        skeletons.name = 'SKELETONS';
        skeletons.artist = TravisScott;
        skeletons.album = Astroworld;

        const wakeUp = new TrackEntity();
        wakeUp.name = 'WAKE UP';
        wakeUp.artist = TravisScott;
        wakeUp.album = Astroworld;

        const fivePercentTint = new TrackEntity();
        fivePercentTint.name = '5% TINT';
        fivePercentTint.artist = TravisScott;
        fivePercentTint.album = Astroworld;

        const ncSeventeen = new TrackEntity();
        ncSeventeen.name = 'NC-17';
        ncSeventeen.artist = TravisScott;
        ncSeventeen.album = Astroworld;

        const astroThunder = new TrackEntity();
        astroThunder.name = 'ASTROTHUNDER';
        astroThunder.artist = TravisScott;
        astroThunder.album = Astroworld;

        const yosemite = new TrackEntity();
        yosemite.name = 'YOSEMITE';
        yosemite.artist = TravisScott;
        yosemite.album = Astroworld;

        const cantSay = new TrackEntity();
        cantSay.name = "CAN'T SAY";
        cantSay.artist = TravisScott;
        cantSay.album = Astroworld;

        const whoWhat = new TrackEntity();
        whoWhat.name = 'WHO? WHAT!';
        whoWhat.artist = TravisScott;
        whoWhat.album = Astroworld;

        const butterflyEffect = new TrackEntity();
        butterflyEffect.name = 'BUTTERFLY EFFECT';
        butterflyEffect.artist = TravisScott;
        butterflyEffect.album = Astroworld;

        const houstonFornication = new TrackEntity();
        houstonFornication.name = 'HOUSTONFORNICATION';
        houstonFornication.artist = TravisScott;
        houstonFornication.album = Astroworld;

        const coffeeBean = new TrackEntity();
        coffeeBean.name = 'COFFEE BEAN';
        coffeeBean.artist = TravisScott;
        coffeeBean.album = Astroworld;


        // Alice In Chains


        const AliceInChains = new ArtistEntity();
        AliceInChains.name = 'Alice In Chains';

        const JarOfFlies = new AlbumEntity();
        JarOfFlies.name = 'Jar of Flies';
        JarOfFlies.artist = AliceInChains;

        const RottenApple = new TrackEntity();
        RottenApple.name = 'Rotten Apple';
        RottenApple.artist = AliceInChains;
        RottenApple.album = JarOfFlies;

        const Nutshell = new TrackEntity();
        Nutshell.name = 'Nutshell';
        Nutshell.artist = AliceInChains;
        Nutshell.album = JarOfFlies;

        const IStayAway = new TrackEntity();
        IStayAway.name = 'I Stay Away';
        IStayAway.artist = AliceInChains;
        IStayAway.album = JarOfFlies;

        const NoExcuses = new TrackEntity();
        NoExcuses.name = 'No Excuses';
        NoExcuses.artist = AliceInChains;
        NoExcuses.album = JarOfFlies;

        const WhaleAndWasp = new TrackEntity();
        WhaleAndWasp.name = 'Whale & Wasp';
        WhaleAndWasp.artist = AliceInChains;
        WhaleAndWasp.album = JarOfFlies;

        const DonFollow = new TrackEntity();
        DonFollow.name = "Don't Follow";
        DonFollow.artist = AliceInChains;
        DonFollow.album = JarOfFlies;

        const SwingOnThis = new TrackEntity();
        SwingOnThis.name = 'Swing on This';
        SwingOnThis.artist = AliceInChains;
        SwingOnThis.album = JarOfFlies;

        // ABBA

        const ABBA = new ArtistEntity();
        ABBA.name = 'ABBA';

        const GoldGreatestHits = new AlbumEntity();
        GoldGreatestHits.name = 'Gold: Greatest Hits';
        GoldGreatestHits.artist = ABBA;

        const DancingQueen = new TrackEntity();
        DancingQueen.name = 'Dancing Queen';
        DancingQueen.artist = ABBA;
        DancingQueen.album = GoldGreatestHits;

        const KnowingMeKnowingYou = new TrackEntity();
        KnowingMeKnowingYou.name = 'Knowing Me, Knowing You';
        KnowingMeKnowingYou.artist = ABBA;
        KnowingMeKnowingYou.album = GoldGreatestHits;

        const TakeAChanceOnMe = new TrackEntity();
        TakeAChanceOnMe.name = 'Take a Chance on Me';
        TakeAChanceOnMe.artist = ABBA;
        TakeAChanceOnMe.album = GoldGreatestHits;

        const MammaMia = new TrackEntity();
        MammaMia.name = 'Mamma Mia';
        MammaMia.artist = ABBA;
        MammaMia.album = GoldGreatestHits;

        const LayAllYourLoveOnMe = new TrackEntity();
        LayAllYourLoveOnMe.name = 'Lay All Your Love on Me';
        LayAllYourLoveOnMe.artist = ABBA;
        LayAllYourLoveOnMe.album = GoldGreatestHits;

        const SuperTrouper = new TrackEntity();
        SuperTrouper.name = 'Super Trouper';
        SuperTrouper.artist = ABBA;
        SuperTrouper.album = GoldGreatestHits;

        const GimmeGimmeGimme = new TrackEntity();
        GimmeGimmeGimme.name = 'Gimme! Gimme! Gimme! (A Man After Midnight)';
        GimmeGimmeGimme.artist = ABBA;
        GimmeGimmeGimme.album = GoldGreatestHits;

        const IHaveADream = new TrackEntity();
        IHaveADream.name = 'I Have a Dream';
        IHaveADream.artist = ABBA;
        IHaveADream.album = GoldGreatestHits;

        const TheWinnerTakesItAll = new TrackEntity();
        TheWinnerTakesItAll.name = 'The Winner Takes It All';
        TheWinnerTakesItAll.artist = ABBA;
        TheWinnerTakesItAll.album = GoldGreatestHits;

        const MoneyMoneyMoney = new TrackEntity();
        MoneyMoneyMoney.name = 'Money, Money, Money';
        MoneyMoneyMoney.artist = ABBA;
        MoneyMoneyMoney.album = GoldGreatestHits;

        const SOS = new TrackEntity();
        SOS.name = 'S.O.S';
        SOS.artist = ABBA;
        SOS.album = GoldGreatestHits;

        // SOAD

        const SOAD = new ArtistEntity();
        SOAD.name = 'System Of A Down';

        const SystemOfADown = new AlbumEntity();
        SystemOfADown.name = 'System of a Down';
        SystemOfADown.artist = SOAD;

        const SuitePee = new TrackEntity();
        SuitePee.name = 'Suite-Pee';
        SuitePee.artist = SOAD;
        SuitePee.album = SystemOfADown;

        const Know = new TrackEntity();
        Know.name = 'Know';
        Know.artist = SOAD;
        Know.album = SystemOfADown;

        const Sugar = new TrackEntity();
        Sugar.name = 'Sugar';
        Sugar.artist = SOAD;
        Sugar.album = SystemOfADown;

        const Suggestions = new TrackEntity();
        Suggestions.name = 'Suggestions';
        Suggestions.artist = SOAD;
        Suggestions.album = SystemOfADown;

        const Spiders = new TrackEntity();
        Spiders.name = 'Spiders';
        Spiders.artist = SOAD;
        Spiders.album = SystemOfADown;

        const DDevil = new TrackEntity();
        DDevil.name = 'DDevil';
        DDevil.artist = SOAD;
        DDevil.album = SystemOfADown;

        const Soil = new TrackEntity();
        Soil.name = 'Soil';
        Soil.artist = SOAD;
        Soil.album = SystemOfADown;

        const War = new TrackEntity();
        War.name = 'War';
        War.artist = SOAD;
        War.album = SystemOfADown;

        const Mind = new TrackEntity();
        Mind.name = 'Mind';
        Mind.artist = SOAD;
        Mind.album = SystemOfADown;

        const Peephole = new TrackEntity();
        Peephole.name = 'Peephole';
        Peephole.artist = SOAD;
        Peephole.album = SystemOfADown;

        // The Beatles

        const TheBeatles = new ArtistEntity();
        TheBeatles.name = 'The Beatles';

        const SgtPeppers = new AlbumEntity();
        SgtPeppers.name = "Sgt. Pepper's Lonely Hearts Club Band";
        SgtPeppers.artist = TheBeatles;

        const SgtPeppersLonelyHeartsClubBand = new TrackEntity();
        SgtPeppersLonelyHeartsClubBand.name = "Sgt. Pepper's Lonely Hearts Club Band";
        SgtPeppersLonelyHeartsClubBand.artist = TheBeatles;
        SgtPeppersLonelyHeartsClubBand.album = SgtPeppers;

        const WithALittleHelpFromMyFriends = new TrackEntity();
        WithALittleHelpFromMyFriends.name = 'With a Little Help from My Friends';
        WithALittleHelpFromMyFriends.artist = TheBeatles;
        WithALittleHelpFromMyFriends.album = SgtPeppers;

        const LucyInTheSkyWithDiamonds = new TrackEntity();
        LucyInTheSkyWithDiamonds.name = 'Lucy in the Sky with Diamonds';
        LucyInTheSkyWithDiamonds.artist = TheBeatles;
        LucyInTheSkyWithDiamonds.album = SgtPeppers;

        const GettingBetter = new TrackEntity();
        GettingBetter.name = 'Getting Better';
        GettingBetter.artist = TheBeatles;
        GettingBetter.album = SgtPeppers;

        const FixingAHole = new TrackEntity();
        FixingAHole.name = 'Fixing a Hole';
        FixingAHole.artist = TheBeatles;
        FixingAHole.album = SgtPeppers;

        const SheLeavingHome = new TrackEntity();
        SheLeavingHome.name = "She's Leaving Home";
        SheLeavingHome.artist = TheBeatles;
        SheLeavingHome.album = SgtPeppers;

        const BeingForTheBenefitOfMrKite = new TrackEntity();
        BeingForTheBenefitOfMrKite.name = "Being for the Benefit of Mr. Kite!";
        BeingForTheBenefitOfMrKite.artist = TheBeatles;
        BeingForTheBenefitOfMrKite.album = SgtPeppers;

        const WithinYouWithoutYou = new TrackEntity();
        WithinYouWithoutYou.name = 'Within You Without You';
        WithinYouWithoutYou.artist = TheBeatles;
        WithinYouWithoutYou.album = SgtPeppers;

        const WhenImSixtyFour = new TrackEntity();
        WhenImSixtyFour.name = "When I'm Sixty-Four";
        WhenImSixtyFour.artist = TheBeatles;
        WhenImSixtyFour.album = SgtPeppers;

        const LovelyRita = new TrackEntity();
        LovelyRita.name = 'Lovely Rita';
        LovelyRita.artist = TheBeatles;
        LovelyRita.album = SgtPeppers;

        const GoodMorningGoodMorning = new TrackEntity();
        GoodMorningGoodMorning.name = 'Good Morning Good Morning';
        GoodMorningGoodMorning.artist = TheBeatles;
        GoodMorningGoodMorning.album = SgtPeppers;

        const SgtPeppersLonelyHeartsClubBandReprise = new TrackEntity();
        SgtPeppersLonelyHeartsClubBandReprise.name = "Sgt. Pepper's Lonely Hearts Club Band (Reprise)";
        SgtPeppersLonelyHeartsClubBandReprise.artist = TheBeatles;
        SgtPeppersLonelyHeartsClubBandReprise.album = SgtPeppers;

        const ADayInTheLife = new TrackEntity();
        ADayInTheLife.name = "A Day in the Life";
        ADayInTheLife.artist = TheBeatles;
        ADayInTheLife.album = SgtPeppers;

        // George Harrison

        const GeorgeHarrison = new ArtistEntity();
        GeorgeHarrison.name = 'George Harrison';

        const allThingsMustPassAlbum = new AlbumEntity();
        allThingsMustPassAlbum.name = 'All Things Must Pass';
        allThingsMustPassAlbum.artist = GeorgeHarrison;

        const idHaveYouAnytime = new TrackEntity();
        idHaveYouAnytime.name = "I'd Have You Anytime";
        idHaveYouAnytime.artist = GeorgeHarrison;
        idHaveYouAnytime.album = allThingsMustPassAlbum;

        const mySweetLord = new TrackEntity();
        mySweetLord.name = 'My Sweet Lord';
        mySweetLord.artist = GeorgeHarrison;
        mySweetLord.album = allThingsMustPassAlbum;

        const wahWah = new TrackEntity();
        wahWah.name = 'Wah-Wah';
        wahWah.artist = GeorgeHarrison;
        wahWah.album = allThingsMustPassAlbum;

        const isntItAPity = new TrackEntity();
        isntItAPity.name = "Isn't It a Pity";
        isntItAPity.artist = GeorgeHarrison;
        isntItAPity.album = allThingsMustPassAlbum;

        const whatIsLife = new TrackEntity();
        whatIsLife.name = 'What Is Life';
        whatIsLife.artist = GeorgeHarrison;
        whatIsLife.album = allThingsMustPassAlbum;

        const ifNotForYou = new TrackEntity();
        ifNotForYou.name = 'If Not for You';
        ifNotForYou.artist = GeorgeHarrison;
        ifNotForYou.album = allThingsMustPassAlbum;


        if(await this.artistRepository.count() == 0){
            await this.artistRepository.insert([Radiohead, RedHotChiliPeppers, FleetwoodMac, PinkFloyd, FooFighters, TravisScott, AliceInChains, ABBA, SOAD, TheBeatles, GeorgeHarrison])
            await this.albumEntity.insert([InRainbows, OKComputer, StadiumArcadium, TheGetaway, Rumours, TheWall, DarkSideOfTheMoon, WastingLight, Astroworld, JarOfFlies, GoldGreatestHits, SystemOfADown, SgtPeppers, allThingsMustPassAlbum]);

            await this.trackEntity.insert([FifteenStep, AllINeed, Bodysnatchers, FaustArp, HouseOfCards, Nude, Reckoner, WeirdFishes, Videotape, JigsawFallingIntoPlace]);
            await this.trackEntity.insert([Airbag, ParanoidAndroid, SubterraneanHomesickAlien, ExitMusic, LetDown, KarmaPolice,FitterHappier, Electioneering, ClimbingUpTheWalls, NoSurprises, Lucky, TheTourist]);
            await this.trackEntity.insert([DaniCalifornia, SnowHeyOh, Charlie, HumpDeBump, ShesOnly18, SlowCheetah, TortureMe, StripMyMind, EspeciallyInMichigan, Warlocks, CmonGirl, WetSand, Hey, DesecrationSmile, TellMeBaby, HardToConcentrate, TwentyFirstCentury, SheLooksToMe, EvenYouBrutus, StormInATeacup, WeBelieve, TurnItAgain, DeathOfAMartian, NothingToLose, SaveThePopulation]);
            await this.trackEntity.insert([TheGetawayTitleTrack, DarkNecessities, WeTurnRed, TheLongestWave, GoodbyeAngels, SickLove, GoRobot, FeastingOnTheFlowers, Detroit, ThisTiconderoga, Encore, TheHunter, DreamsOfASamurai]);
            await this.trackEntity.insert([SecondHandNews, Dreams, NeverGoingBackAgain, DonTStop, GoYourOwnWay, Songbird, TheChain, YouMakeLovingFun, IDonWannaKnow, OhDaddy, GoldDustWoman]);
            await this.trackEntity.insert([InTheFlesh, TheThinIce, AnotherBrickInTheWallPart1, TheHappiestDaysOfOurLives, AnotherBrickInTheWallPart2, Mother, GoodbyeBlueSky, EmptySpaces, YoungLust, OneOfMyTurns, DonLeaveMeNow, AnotherBrickInTheWallPart3, GoodbyeCruelWorld,]);
            await this.trackEntity.insert([SpeakToMe, Breathe, OnTheRun, Time, TheGreatGigIntheSky, Money, UsAndThem, AnyColourYouLike, BrainDamage, Eclipse]);
            await this.trackEntity.insert([BridgeBurning, Rope, DearRosemary, WhiteLimo, Arlandria, TheseDays, BackAndForth, AMatterOfTime, MissTheMisery, IShouldHaveKnown, Walk]);
            await this.trackEntity.insert([stargazing, carousel, sickoMode, ripScrew, stopTryingToBeGod, noBystanders, skeletons, wakeUp, fivePercentTint, ncSeventeen, astroThunder, yosemite, cantSay, whoWhat, butterflyEffect, houstonFornication, coffeeBean]);
            await this.trackEntity.insert([RottenApple, Nutshell, IStayAway, NoExcuses, WhaleAndWasp, DonFollow, SwingOnThis]);
            await this.trackEntity.insert([DancingQueen, KnowingMeKnowingYou, TakeAChanceOnMe, MammaMia, LayAllYourLoveOnMe, SuperTrouper, GimmeGimmeGimme, IHaveADream, TheWinnerTakesItAll, MoneyMoneyMoney, SOS]);
            await this.trackEntity.insert([SuitePee, Know, Sugar, Suggestions, Spiders, DDevil, Soil, War, Mind, Peephole]);
            await this.trackEntity.insert([SgtPeppersLonelyHeartsClubBand, WithALittleHelpFromMyFriends, LucyInTheSkyWithDiamonds, GettingBetter, FixingAHole, SheLeavingHome, BeingForTheBenefitOfMrKite, WithinYouWithoutYou, WhenImSixtyFour, LovelyRita, GoodMorningGoodMorning, SgtPeppersLonelyHeartsClubBandReprise, ADayInTheLife]);
            await this.trackEntity.insert([idHaveYouAnytime, mySweetLord, wahWah, isntItAPity, whatIsLife, ifNotForYou]);
        }
    }
}
