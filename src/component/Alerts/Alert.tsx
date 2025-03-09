import "./_alert.scss";
type AlertProps = {
  label: string;
  message: string;
  status: "success" | "info" | "warning" | "error";
};

export const Alert = ({ message, label, status }: AlertProps) => {
  const setStatus = (type: string) => {
    switch (type) {
      case "success":
        return "alert-success";
      case "info":
        return "alert-info";
      case "warning":
        return "alert-warning";
      case "error":
        return "alert-error";
      default:
        return "";
    }
  };

  return (
    <div className={`alert ${setStatus(status)}`}>
      <h4>{label}</h4>
      <p>{message}</p>
    </div>
  );
};
