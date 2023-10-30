type GWClass = 'Guardian' | 'Warrior' | 'Revenant' | 'Engineer' | 'Thief' | 'Ranger' | 'Mesmer' | 'Necromancer' | 'Elementalist' | undefined
type GWClassExtended = {
    display: GWClass,
    color: string
}
type GWRaid = {
    name: string;
    thumbnail: any;
}

type Days = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export {
    GWClass,
    GWRaid,
    GWClassExtended,
    Days
}