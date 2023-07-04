import {
  DeleteOutlined,
  InsertDriveFileOutlined,
  MailOutlined,
  Photo,
  SendOutlined,
  StarOutlined,
} from "@mui/icons-material";

export const SIDEBAR_DATA = [
  {
    name: "inbox",
    title: "Inbox",
    icon: Photo,
  },
  {
    name: "starred",
    title: "starred",
    icon: StarOutlined,
  },
  {
    name: "sent",
    title: "sent",
    icon: SendOutlined,
  },
  {
    name: "drafts",
    title: "Drafts",
    icon: InsertDriveFileOutlined,
  },
  {
    name: "bin",
    title: "Bin",
    icon: DeleteOutlined,
  },
  {
    name: "allmail",
    title: "All Mail",
    icon: MailOutlined,
  },
];
