import { useNavigate } from "react-router-dom";
import { Button, InputText } from "../../components/ui-kit";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { authStore } from "../../store";
import { RouteName, routes } from "../../routes";

export function LoginPage() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;

    authStore.login(username);
    navigate(routes[RouteName.DIARY].path, { replace: true });
  }

  const [username, setUsername] = useState("");

  return (
    <div className="w-1/2 h-60 shadow-xl rounded mx-auto mt-40 flex flex-col items-center">
      <p className="text-2xl font-bold py-2">
        You must log in to view diary page
      </p>

      <form onSubmit={handleSubmit} className="mt-20 flex items-center gap-2">
        <label>Username: </label>
        <InputText
          name="username"
          type="text"
          onChange={setUsername}
          value={username}
          required
        />

        <Button icon={<ArrowRightOnRectangleIcon />} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
