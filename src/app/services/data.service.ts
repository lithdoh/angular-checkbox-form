import { Injectable } from '@angular/core';
import { Stems } from "../models/stem";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getUniqueValues(data: Stems[], property: string) {
    const brandSet = new Set(data.map(stem => stem[property as keyof typeof stem]))
    const uniqArray: (string | number | null)[] = [...brandSet];
    let sortedUniqArray: (string | number | null)[] = uniqArray;

    // Checking if either the first or second is of type "string" or "number" in case the first item is null
    if(uniqArray.includes(null)) {
      uniqArray.splice(uniqArray.indexOf(null), 1);
    }

    if(typeof uniqArray[0] === "string") {

      sortedUniqArray = uniqArray.sort();
      return sortedUniqArray;
    }
    
    if(typeof uniqArray[0] === "number") {

      sortedUniqArray = uniqArray.sort((a, b) => (a as number) - (b as number));
      return sortedUniqArray;
    }

    return sortedUniqArray;
  }

    /* // Cannot use this because the database does not allow filtering on null
    // Checking if either the first or second is of type "string" or "number" in case the first item is null

    if((typeof uniqArray[0] === "string" || typeof uniqArray[1] === "string") && uniqArray.includes(null)) {

      // Remove null from uniqArray
      uniqArray.splice(uniqArray.indexOf(null), 1);

      sortedUniqArray = uniqArray.sort();

      sortedUniqArray.unshift('--');
      return sortedUniqArray;
    }
    
    if((typeof uniqArray[0] === "number" || typeof uniqArray[1] === "number") && uniqArray.includes(null)) {
      
      // Remove null from uniqArray
      uniqArray.splice(uniqArray.indexOf(null), 1);

      sortedUniqArray = uniqArray.sort((a, b) => (a as number) - (b as number));
      
      sortedUniqArray.unshift('--');
      return sortedUniqArray;
    }

    if (uniqArray.every((item) => typeof item === "string")) {
      sortedUniqArray = uniqArray.sort();
      return sortedUniqArray;
    }

    
    if (uniqArray.every((item) => typeof item === "number")) {
      sortedUniqArray = uniqArray.sort((a, b) => (a as number) - (b as number));
      return sortedUniqArray;
    }

    return sortedUniqArray;
  } */
}


// some arrays contain only string
//  for these, sort alphabetically
// some arrays contain only numbers
//  for these, sort ascending
// some arrays contain strings and null
//  for these, sort alphabetically and remove null and add '--' to the beginning
// some arrays contain numbers and null
//  for these, sort ascending and remove null and add '--' to the beginning

// I think in the future you would have them come from the database presorted and with units. 
// The database can correctly sort them even if they have units