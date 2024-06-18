class Person {
    private nick: string;
    public age: number;
    readonly log: string;

    constructor(nick: string, age: number) {
        this.nick = nick;
        this.age = age;
        this.log = `Created person: ${nick}, age: ${age}`;
    }

    // getter method for nick
    public getNick(): string {
        return this.nick;
    }

    // setter method for nick
    public setNick(nick: string): void {
        this.nick = nick;
    }
}