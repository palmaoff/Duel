# duel
node js console game

# Карточная игра "дуэль":

В эту игру играют два игрока, у каждого из которых на руках 12 карточек с числами от 0 до 11. 
Первый игрок выбирает карту из имеющихся у него на руках и выкладывает на стол рубашкой вверх. Число на выбранной карте будет являться "атакой" игрока. После этого второй игрок выбирает карту из оставшихся у него на руках и также выкладывает её рубашкой вверх. Это его "защита". После этого игроки одновременно переворачивают карты, и защищающийся игрок получает столько штрафных очков насколько "атака" первого игрока превышает защиту "второго". В следующем раунде игроки меняются местами.
Игра заканчивается, когда у игроков не остаётся карт на руках. Выигрывает игрок получивший меньше всего штрафных очков. 

# run
node duel.js

# алгоритм противника
Противник действует по простому алгоритму. Защищается максимальным возможным числом , а отаковать наименьшим для того, чтобы не получить штрафных очков