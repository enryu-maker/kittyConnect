import socket

def run_server():
    HOST = '0.0.0.0'  # Server IP address
    PORT = 12345        # Port to listen on

    # Create a TCP/IP socket
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server_socket:
        server_socket.bind((HOST, PORT))
        server_socket.listen()

        print("Server is listening on port", PORT)
        conn, addr = server_socket.accept()

        with conn:
            print('Connected by', addr)
            
            while True:
                data = conn.recv(1024)
                if not data:
                    break
                print('Received:', data.decode())
                conn.sendall(data)

def run_client():
    # Input server IP address from user
    SERVER_HOST = input("Enter server IP address: ")  
    SERVER_PORT = 12345

    # Create a TCP/IP socket
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as client_socket:
        # Connect to the server
        client_socket.connect((SERVER_HOST, SERVER_PORT))
        
        while True:
            # Input message from user
            message = input("Enter message: ")
            
            # Send message to the server
            client_socket.sendall(message.encode())
            
            # Receive response from the server
            data = client_socket.recv(1024)
            print('Received:', data.decode())


if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1 and sys.argv[1] == "server":
        run_server()
    else:
        run_client()
