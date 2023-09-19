import { Card, Avatar, Text, Group, Button, useMantineTheme } from '@mantine/core';
import { rem } from '@mantine/core';
import { createElement } from 'react';
const useStyles = () => {
  const statsData = [
    { label: 'Followers', value: '1.5k' },
    { label: 'Following', value: '900' },
    { label: 'Posts', value: '300' },
  ];
  const theme = useMantineTheme();

  return {
    card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },
    avatar: {
      border: `${rem(2)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
    },
  };
};

export default function UserCard({ image, avatar, name, job, stats }) {
  const classes = useStyles();

  const items = stats.map((stat) => (
    createElement('div', { key: stat.label },
      createElement(Text, { ta: "center", fz: "lg", fw: 500 }, stat.value),
      createElement(Text, { ta: "center", fz: "sm", c: "dimmed" }, stat.label)
    )
  ));

  return (
    createElement(Card, { withBorder: true, padding: "xl", radius: "md", className: classes.card },
      createElement(Card.Section, { sx: { backgroundImage: `url(${image})`, height: 140 } }),
      createElement(Avatar, { src: avatar, size: 80, radius: 80, mx: "auto", mt: -30, className: classes.avatar }),
      createElement(Text, { ta: "center", fz: "lg", fw: 500, mt: "sm" }, name),
      createElement(Text, { ta: "center", fz: "sm", c: "dimmed" }, job),
      createElement(Group, { mt: "md", position: "center", spacing: 30 }, items),
      createElement(Button, {
        fullWidth: true,
        radius: "md",
        mt: "xl",
        size: "md",
        color: useMantineTheme().colorScheme === 'dark' ? undefined : 'dark'
      }, "Follow")
    )
  );
}

