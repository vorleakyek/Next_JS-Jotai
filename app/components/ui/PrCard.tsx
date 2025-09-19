import { Button } from "@mantine/core";

type PrCardProps = {
  title: string;
  prNumber: number;
  statusIcon: React.ReactNode;
  login: string;
  createdAt: string;
  lastComment: string;
  //   requested_reviewers: string;
};

const PrCard = ({
  title,
  prNumber,
  statusIcon,
  login,
  createdAt,
  lastComment,
}: //   requested_reviewers,
PrCardProps) => {
  return (
    <div>
      <div>
        <span>
          <Button>{prNumber}</Button>
        </span>
        <span>{statusIcon}</span>
        <h2 className="inline">{title}</h2>
      </div>
      <div>
        <p>
          Opened by{" "}
          <span>
            @{login} . {createdAt}{" "}
          </span>
        </p>
        {lastComment && (
          <p>
            Last comment by <span>@{lastComment}</span>
          </p>
        )}
        {/* <p>
          Reviewers: <span>{requested_reviewers}</span>
        </p> */}
      </div>
    </div>
  );
};

export default PrCard;
