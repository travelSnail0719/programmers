// 세로
let di = [-1, 0, 1, 0]; 
// 가로
let dj = [0, 1, 0, -1];

class node{
    constructor(i, j, time){
        this.i = i;
        this.j = j;
        this.time = time;
    }
}

function bfs(queue, maps, visit){
    let current = new node;
    // queue.push(current);

    while(queue.length){
        current = queue.shift();

        let ni;
        let nj;
        for(let k = 0; k < 4; k++){
            ni = current.i + di[k];
            nj = current.j + dj[k];

            if(ni == maps.length - 1 && nj == maps[0].length - 1){
                return current.time + 1;
            }

            // 갈 수 있는 노드인지 범위 체크
            if(ni >= 0 && nj >= 0 && ni < maps.length && nj < maps[0].length){
                if(maps[ni][nj] == 1 && visit[ni][nj] == 0){
                    queue.push(new node(ni, nj, current.time + 1));
                    visit[ni][nj] = 1;
                }
            }
        }
    }
    return - 1;
}

function solution(maps){    
    let queue = [new node(0,0,1)];
    let a = maps.length;
    let b = maps[0].length;
    let visit = Array.from(Array(a), () => Array(b).fill(0));
    return bfs(queue, maps, visit);
}

