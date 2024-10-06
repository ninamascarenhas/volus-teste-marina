// Função para adicionar uma nova tarefa
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskValue = taskInput.value;

    // Verifiquei se o campo estava vazio e exibi um alerta
    if (taskValue.trim() === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    // Criei o item da lista para a nova tarefa
    const li = document.createElement('li');
    li.classList.add('task-item');

    // Adicionei o conteúdo da tarefa
    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');
    taskContent.textContent = taskValue;

    // Criei a div para as ações (concluir e remover)
    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');

    // Criei o botão de concluir com o ícone de check
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    // Configurei o botão de concluir para mover a tarefa entre pendente e concluída
    completeBtn.addEventListener('click', function () {
        taskContent.classList.toggle('completed');
        if (taskContent.classList.contains('completed')) {
            const completedList = document.getElementById('completed-list');
            completedList.appendChild(li);
            completeBtn.innerHTML = '<i class="fas fa-times"></i>';
            toggleCompletedSection(); // Atualizei a seção de tarefas concluídas
        } else {
            const pendingList = document.getElementById('pending-list');
            pendingList.insertBefore(li, pendingList.firstChild);
            completeBtn.innerHTML = '<i class="fas fa-check"></i>';
            toggleCompletedSection(); // Atualizei a seção de tarefas concluídas
        }
        togglePendingSection(); // Atualizei a seção de tarefas pendentes
    });

    // Criei o botão de remover com o ícone de lixeira
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.innerHTML = '<i class="fas fa-trash"></i>';

    // Configurei o botão de remover para excluir a tarefa
    removeBtn.addEventListener('click', function () {
        li.remove(); // Removi a tarefa da lista
        toggleCompletedSection(); // Atualizei a seção de tarefas concluídas
        togglePendingSection(); // Atualizei a seção de tarefas pendentes
    });

    // Adicionei os botões de concluir e remover ao item da lista
    taskActions.appendChild(completeBtn);
    taskActions.appendChild(removeBtn);

    // Adicionei o conteúdo da tarefa e as ações ao item da lista
    li.appendChild(taskContent);
    li.appendChild(taskActions);

    // Coloquei a nova tarefa no topo da lista de pendentes
    const pendingList = document.getElementById('pending-list');
    pendingList.insertBefore(li, pendingList.firstChild);

    // Atualizei a exibição da seção de tarefas pendentes
    togglePendingSection();

    // Limpei o campo de entrada da nova tarefa
    taskInput.value = '';
}

// Função para remover todas as tarefas concluídas
function removeAllCompleted() {
    const completedList = document.getElementById('completed-list');
    completedList.innerHTML = ''; // Limpei a lista de tarefas concluídas
    toggleCompletedSection(); // Atualizei a seção de tarefas concluídas
}

// Função para atualizar a seção de tarefas concluídas
function toggleCompletedSection() {
    const completedList = document.getElementById('completed-list');
    const completedPlaceholder = document.getElementById('completed-placeholder');
    const removeAllBtn = document.querySelector('.remove-all-btn');

    // Verifiquei se havia tarefas concluídas e ajustei o estado da seção e do botão
    if (completedList.children.length === 0) {
        completedPlaceholder.style.display = 'block'; // Exibi o placeholder quando não havia tarefas
        removeAllBtn.style.display = 'none'; // Escondi o botão de remover quando não havia tarefas
    } else {
        completedPlaceholder.style.display = 'none'; // Ocultei o placeholder
        removeAllBtn.style.display = 'block'; // Exibi o botão de remover
    }
}

// Função para atualizar a seção de tarefas pendentes
function togglePendingSection() {
    const pendingList = document.getElementById('pending-list');
    const pendingPlaceholder = document.getElementById('pending-placeholder');

    // Verifiquei se havia tarefas pendentes e ajustei o estado da seção
    if (pendingList.children.length === 0) {
        pendingPlaceholder.style.display = 'block'; // Exibi o placeholder quando não havia tarefas
    } else {
        pendingPlaceholder.style.display = 'none'; // Ocultei o placeholder
    }
}
