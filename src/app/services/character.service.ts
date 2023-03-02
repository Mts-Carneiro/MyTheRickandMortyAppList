import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from 'src/model/character';
import { from, map, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  public characters: Character[] = []

  constructor(private httpClient: HttpClient) {
      const allCharacterUrl = "https://rickandmortyapi.com/api/character/"
      this.httpClient.get<any>(allCharacterUrl).pipe(
        map(value => value.results),
        map((value: any) => {
          return from(value).pipe(
            mergeMap((v: any) => this.httpClient.get(v.url)),
          );
        }),
        mergeMap(value => value),
      ).subscribe((result: any) => this.characters[result.id] = {
        id: result.id,
        name: result.name,
        status: result.status,
        species: result.species,
        type:result.type,
        gender:result.gender,
        origin:result.origin,
        location:result.location,
        url:result.url,
        image:result.image,
        episode:result.episode,
        created:result.created,
      });
   }
}
