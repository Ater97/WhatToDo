export class Activity {

    constructor(
        public _id: string,
        public activity: string,
        public image: string,
        public cover: string, //1920x480
        public description: string,
        public participantsMax: number,
        public participantsMin: number,
        public budget: number,
        public time: number,
        public intensity: string
    ) { }
}

export interface IActivity {
     _id: string;
     activity: string;
     image: string;
     cover: string; 
     description: string
}

    /* _id: string;
     name: string;
     image: string;
     cover: string; //1920x480
     description: string*/