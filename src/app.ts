type User = {
          firstname: string,
          lastname: string
}


function identity<ArgType>(agr: ArgType): ArgType {
          return agr
}

function first<Type>(agr: Type[]): Type | void {
          if (agr[0]) {
                    return agr[0]
          }
}

type TypeLength = {
          length: number
}

function consoleSize<Type extends TypeLength>(arg: Type): Type {
          console.log(arg.length)
          return arg
}

const size = consoleSize((56).toString())

const aa = identity<string>("3")

const f = first(["hey", 1, null])

// const a: string = "Hello world"
const n: number = 5
const b: boolean = false
const arr: string[] = ['hhd', "holla"]
const user: User = { firstname: "John", lastname: "hy" }

const cb: (e: MouseEvent) => void = (e: MouseEvent): number => {
          return 3
}

function printId(id: number | string): void {
          console.log(id)
}

class A {
          a = 3
}
/* 
 const compteur = document.querySelector('#compteur')
let i = 0

const increment = (e: Event) => {
          e.preventDefault()
          i++
          const span = compteur?.querySelector('span')
          if(span) {
                    span.innerText = i.toString()
          }
}

compteur?.addEventListener('click', increment) */

// classes
function reverse<T>(arr: readonly T[]): T[] {
          return [...arr].reverse()
}

class Test {
          protected age = 3
          constructor(public nom: string) {
                    
          }
}

class Collection<T> {
          constructor(private items: T[]) {

          }

          public first(): T | null {
                    return this.items[0] || null
          }
}

const collecation = new Collection<string>(["1"])

const test = new Test("Darcy")
console.log(test.nom)

class Point {
          x = 0
          y = 0
          data = {}
}

class Geometry {
          x = 0
          y = 0
          surface = 0
}

function getX(p: Point) {
          return p.x
}

type Point2 = {
          x: number,
          y: number
}


interface Point3 {
          x: number,
          y: number
}

interface Point3 {
          surface: number
}

class TwoDPoint implements Point3 {
          x = 0
          y = 0
          surface = 0
}

// getX(new Geometry())

//Uknow vs any
function logValue(arg: unknown) {
          if (arg instanceof HTMLInputElement) {
                    console.log(arg.value)
          } else {
                    console.log(arg)
          }
}

const config = {
          isPrivate: true,
          isPublic: false
} as const

const elements = [1, 3, 4] as const

// les Tuples
type ListItem = [string, number]

const babanes: ListItem = ["babanes", 2]
const oranges: ListItem = ["oranges", 4]

const merge = <T extends unknown[], U extends unknown[]>(bnnes: T, oranges: U): [...T, ...U] => {
          return [...bnnes, ...oranges]
}

function mg<T extends unknown[], U extends unknown[]>(bn: T, oranges: U): [...T, ...U] {
          return [...bn, ...oranges]
}

// no uncheckedIndexAccess
console.log(babanes[0].toUpperCase())
const names = ["John", "Jack"]
if (names[0]) {
          console.log(names[0].toUpperCase())
}

// les declarations des fichiers
export class Point5 {
          x = 0
          y = 0

          move(x: number, y: number) {
                    this.x += x
                    this.y += y
                    return this
          }
}

import scrollTo from 'scroll-to'

scrollTo(500, 1200, {
          ease: 'out-bounce',
          duration: 1500
});

// types personnalisés

class Poisson {

}

class Chat {

}

type AnimalOptions = { nager: any } | { sauter: any }
type AnimalFromOptions<T> = T extends { nager : any } ? Poisson : Chat

function generator<T extends AnimalOptions>(options: T) : AnimalFromOptions<T>
{
          if('nager' in options) {
                    return new Poisson()
          } else {
                    return new Chat()
          }
}

const poisson = generator({ nager: true })