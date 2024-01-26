import customers from "../customers/customers.js";

// Implementação do algoritmo Problema do Caixeiro Viajante (TSP)
const getNearestCostumers = async () => {
    try {
        const customersData = await customers.list();
        // const locations = customersData.map(customer => ({ x: customer.position_x, y: customer.position_y }));
        const locations = customersData.map(customer => ({ name: customer.name, x: customer.position_x, y: customer.position_y }));

        
        // sede da companhia se inicia nas coordenadas x: 0 e y: 0
        const startPoint = { name: 'Sede Companhia', x: 0, y: 0 };
        const visited = [startPoint];
        
        while (locations.length > 0) {
            // findNearestCostumer irá remover os dados da variável locations conforme obter o ponto visitado mais proximo
            const nearestCustomer = findNearestCostumer(visited[visited.length - 1], locations);
            visited.push(nearestCustomer); // adiciona o customer mais perto dentro do array de visited
        }

        // Adiciona o ponto inicial (0, 0) - sede da companhia - ao final do array
        visited.push(startPoint);
        return visited;
    } catch (error) {
        console.log('error', error);
        throw new Error(error);
    }
}

function findNearestCostumer(point, locations) {
    let minDistance = Number.MAX_VALUE;
    let nearestCustomer = null;

    // o loop irá garantir sempre atualizar a menor distancia dentre todas as locations disponíveis
    for (const location of locations) {
        const distance = calculateDistance(point, location);
        if (distance < minDistance) {
            minDistance = distance;
            nearestCustomer = location;
        }
    }

    const index = locations.indexOf(nearestCustomer);
    locations.splice(index, 1); // Remove o ponto visitado da lista de locais

    return nearestCustomer;
}

function calculateDistance(point1, point2) {
    const dx = point1.x - point2.x;
    const dy = point1.y - point2.y;
    // calcula a função euclidiana entre dois pontos em um plano bidimensional 
    return Math.sqrt(dx * dx + dy * dy); // usando teorema de pitagoras para calcular a distancia euclidiana
    // o teorema de pitagoras serve para triangular o resultado da distancia euclidiana
    // formula euclidiana é uma medida direta, como em linha reta, para mensurar a distancia entre o ponto X e Y
}

export default getNearestCostumers;