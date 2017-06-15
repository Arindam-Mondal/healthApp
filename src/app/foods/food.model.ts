export class Food {
    public name: string;
    public description: string;
    public calorie: number;
    public carb: number;
    public protein: number;
    public fat: number;
    public imagePath: string;

    constructor(name: string, desc: string, calorie: number, carb: number, protein: number, fat: number, imagePath: string){
        this.name = name;
        this.description = desc;
        this.calorie = calorie;
        this.carb = carb;
        this.protein = protein;
        this.fat = fat;
        this.imagePath = imagePath;
    }
}