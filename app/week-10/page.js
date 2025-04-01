"use client"
import { useEffect } from 'react';
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from 'next/router';


const ShoppingPage = () => {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter(); 
    const [loading, setLoading] = useState(false); 

    const handleLogin = async () => {  
        setLoading(true);
        try {
          await gitHubSignIn();
        } catch (error) {
          console.error('Login unsuccessful', error);
        } finally {
            setLoading(false);  
        }
    };    

    const handleLogout = async () => {
        setLoading(true);
        try {
          await firebaseSignOut();  // Trigger the sign-out process
        } catch (error) {
          console.error('Logout unsuccessful', error);
        } finally {
            setLoading(false)
        }
      };
 
// Display some of the user's information

return (
    <div>
      {!user ? (
        <button onClick={handleLogin}>Login as {user.displayName} ({user.email})</button>
      ) : (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout}>Logout</button>
          <button onClick={() => router.push('/week-10/shopping-list')}>Go to Shopping List</button>
        </div>
      )}
    </div>
    );
};

export default ShoppingPage