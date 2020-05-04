# Zadanie rekrutacyjne flow2code
```
https://flow2code-task.netlify.app/
```

## Realizacja założonego projektu
Jednoczesne wyszukiwanie filmów a następnie sortowanie wyników, nie jest możliwe ze względu na budowę API 
(https://www.themoviedb.org/talk/5e455d020c2710001585a9a1?fbclid=IwAR1dS0tZ6ZSEJV7b0zCXKfN0qfa4WK3Fdj372j1WbHp2JgI8sg57vkCHXn8),
dlatego sortowanie i wyszukiwanie zostały zaimplementowane jako odzielne fukcjonalności, aby jak najlepej oddawać możliwości zadanej aplikacji.

## Użyte technologie
Projekt został wykonany przy użyciu Vue-cli 3 (zawiera vue-router oraz vuex).
Do oprawy wizualnej został użyty Boostrap4.
Kod formatowany jest przy pomocy ESLint oraz Prettier.

## Instalacja
Projekt został utworzony poprzez Vue-cli 3 w przypadku posiadania starszej wersji może być niezbędna deinstalacja jej i zastąpienie nową.
```
# delete old vue-cli
npm uninstall vue-cli -g
# install vue-cli3
npm install -g @vue/cli
```

Aby aplikacja działała poprawnie należy utworzyć plik .env w którym umieścimy wartość klucza.
```
VUE_APP_API_KEY= wartość_klucza
```

Aby uruchomić projekt należy wykonać poniżej przedstawiony krok 1) i 2).

### 1) Project setup
```
npm install
```

### 2) Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
