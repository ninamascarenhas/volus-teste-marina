import csv

# Função para ler usuários de um arquivo CSV e filtrar por domínio
def ler_usuarios(arquivo_csv, dominio):
    try:
        # Para abrir o arquivo CSV no modo de leitura
        with open(arquivo_csv, mode='r') as file:
            leitor = csv.DictReader(file)  # Usei DictReader para ler o CSV como um dicionário
            usuarios_filtrados = []  # Criei uma lista para armazenar os usuários que atendem ao filtro
            
            # Percorri cada linha do CSV para verificar se o domínio está presente no email
            for linha in leitor:
                if dominio in linha['email']:
                    # Adicionei o ID e o nome do usuário à lista se o domínio estiver no email
                    usuarios_filtrados.append((linha['ID'], linha['nome']))
                    
            # Verifiquei se encontrei algum usuário com o domínio especificado
            if usuarios_filtrados:
                print(f"Usuários com o domínio '{dominio}':")
                # Para cada usuário encontrado, exibi o ID e o nome
                for id, nome in usuarios_filtrados:
                    print(f"ID: {id}, Nome: {nome}")
            else:
                # Exibi uma mensagem caso nenhum usuário tenha sido encontrado com o domínio
                print(f"Nenhum usuário encontrado com o domínio '{dominio}'.")

    # Capturei o erro caso o arquivo CSV não fosse encontrado
    except FileNotFoundError:
        print(f"Erro: O arquivo '{arquivo_csv}' não foi encontrado.")
    
    # Capturei o erro caso as colunas esperadas ('ID', 'nome', 'email') estivessem ausentes
    except KeyError:
        print("Erro: O formato do arquivo CSV está incorreto. Certifique-se de que contém as colunas 'ID', 'nome' e 'email'.")
    
    # Capturei qualquer outro erro inesperado e exibi uma mensagem com detalhes
    except Exception as e:
        print(f"Ocorreu um erro inesperado: {e}")

# Exemplo de uso
arquivo = 'usuarios.csv'
dominio_email = '@exemplo.com'

# Chamei a função para ler o arquivo e filtrar usuários com o domínio especificado
ler_usuarios(arquivo, dominio_email)