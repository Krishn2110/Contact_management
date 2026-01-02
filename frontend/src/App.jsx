import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Footer from "./components/Footer";

const API = "http://localhost:5000/api/contacts";

export default function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await axios.get(API);
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

 return (
    <div className="min-h-screen pb-12">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-10">
       
        
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <ContactForm fetchContacts={fetchContacts} />
          </div>
          <div className="lg:col-span-3">
            <ContactList contacts={contacts} fetchContacts={fetchContacts} />
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
