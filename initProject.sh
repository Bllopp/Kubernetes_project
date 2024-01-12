echo "Installation of the Kubernetes ressources "
echo
sleep 1

echo "⚠️ Assure that minikube is started on your machine ⚠️"
read -p "Press enter to continue..."
echo

echo "Creation of the database ressources...⌛"
sleep 1

echo 
echo "Creation of the persistent volume"
kubectl apply -f './SQL Database/mysql-storage.yaml'
echo "Please wait until the persistent volume is ready..."
sleep 10 
kubectl apply -f './SQL Database/mysql-serviceClusterIp.yaml'
kubectl apply -f './SQL Database/mysql-serviceNodePort.yaml'
kubectl apply -f './SQL Database/mysql-secret.yaml'
kubectl apply -f './SQL Database/mysql-deployment.yaml'

echo

echo "Database ressources created ✅"
sleep 1

echo 
echo "Creation of the Connection API..⌛."
sleep 1
echo 

kubectl apply -f './Connection Service/cloud-backend.yaml'
echo 

echo "Connection API created ✅"

echo 
echo "Creation of the Tasks Manager API...⌛"
sleep 1
echo 

kubectl apply -f './Task Manager/task-service.yaml'
echo 

echo "Connection Tasks Manager created ✅"
echo
echo "✅ Deployment completed successfully. ✅"

sleep 2
echo 
echo "Configuring the Ingress Service to access Kubernetes ressources...⌛"
minikube addons enable ingress
minikube addons enable ingress-dns
kubectl apply -f ./ingress.yml

echo "Ingress configured ✅"
echo
sleep 1
echo "Launching the Ingress tunnel in the background...⌛"
minikube tunnel &
sleep 5
echo
echo "Accessible at: http.//myservice.info"

echo "Now lauching the Front-End React application"
sleep 1
echo
cd './Front End/todo-list/'
echo "Installing dependencies...⌛"
sleep 2
npm install
echo
echo "Dependencies installed ✅"
echo
echo "❗ IMPORTANT ❗"
echo "credentials to access the website"
echo "username: user1 | password: password1"
echo "username: user2 | password: password2"
echo 
sleep 4
echo "Launching the React application locally"


npm start