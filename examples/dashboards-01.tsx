import { ArrowUpRight, BarChartSquare02, CheckDone01, Edit04, FilterLines, HomeLine, PieChart03, Rows01, UserPlus01, Users01 } from "@untitledui/icons";
import { Area, AreaChart, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, XAxis } from "recharts";
import type { FeedItemType } from "@/components/application/activity-feed/activity-feed";
import { FeedItem } from "@/components/application/activity-feed/activity-feed";
import { FeaturedCardImage } from "@/components/application/app-navigation/base-components/featured-cards";
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import { ChartTooltipContent } from "@/components/application/charts/charts-base";
import { DateRangePicker } from "@/components/application/date-picker/date-range-picker";
import { MetricChangeIndicator } from "@/components/application/metrics/metrics";
import { SectionHeader } from "@/components/application/section-headers/section-headers";
import { TableRowActionsDropdown } from "@/components/application/table/table";
import { Badge } from "@/components/base/badges/badges";
import type { BadgeColor } from "@/components/base/badges/badges";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { Button } from "@/components/base/buttons/button";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icons";
import { cx } from "@/utils/cx";

const lineData = [
    {
        date: new Date(2025, 0, 1),
        A: 600,
    },
    {
        date: new Date(2025, 1, 1),
        A: 620,
    },
    {
        date: new Date(2025, 2, 1),
        A: 630,
    },
    {
        date: new Date(2025, 3, 1),
        A: 650,
    },
    {
        date: new Date(2025, 4, 1),
        A: 600,
    },
    {
        date: new Date(2025, 5, 1),
        A: 650,
    },
    {
        date: new Date(2025, 6, 1),
        A: 620,
    },
    {
        date: new Date(2025, 7, 1),
        A: 750,
    },
    {
        date: new Date(2025, 8, 1),
        A: 780,
    },
    {
        date: new Date(2025, 9, 1),
        A: 750,
    },
    {
        date: new Date(2025, 10, 1),
        A: 780,
    },
    {
        date: new Date(2025, 11, 1),
        A: 820,
    },
];

type Article = {
    id: string;
    href: string;
    thumbnailUrl: string;
    title: string;
    summary: string;
    category: {
        href: string;
        name: string;
    };
    author: {
        href: string;
        name: string;
        avatarUrl: string;
    };
    publishedAt: string;
    readingTime: string;
    tags: Array<{ name: string; color: BadgeColor<"color">; href: string }>;
    isFeatured?: boolean;
};

const articles: Article[] = [
    {
        id: "article-1",
        title: "UX review presentations",
        summary: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        href: "#",
        category: { name: "Design", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/application/spirals.webp",
        publishedAt: "20 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Olivia Rhye",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
        },
        tags: [
            { name: "Design", color: "brand", href: "#" },
            { name: "Research", color: "indigo", href: "#" },
            { name: "Presentation", color: "pink", href: "#" },
        ],
        isFeatured: true,
    },
    {
        id: "article-2",
        title: "Migrating to Linear 101",
        summary: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
        href: "#",
        category: { name: "Product", href: "#" },
        thumbnailUrl: "https://www.untitledui.com/application/conversation.webp",

        publishedAt: "19 Jan 2025",
        readingTime: "8 min read",
        author: {
            name: "Phoenix Baker",
            href: "#",
            avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
        },
        tags: [
            { name: "Product", color: "blue-light", href: "#" },
            { name: "Tools", color: "pink", href: "#" },
            { name: "SaaS", color: "pink", href: "#" },
        ],
    },
];

const feed: FeedItemType[] = [
    {
        id: "user-1",
        unseen: true,
        user: {
            avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
            name: "Phoenix Baker",
            href: "#",
            status: "online",
        },
        action: { content: "Member since Feb 2025" },
    },
    {
        id: "user-2",
        unseen: true,
        user: {
            avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80",
            name: "Lana Steiner",
            href: "#",
            status: "online",
        },
        action: { content: "Member since Jan 2025" },
    },
    {
        id: "user-3",
        unseen: true,
        user: {
            avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80",
            name: "Demi Wilkinson",
            href: "#",
            status: "online",
        },
        action: { content: "Member since Mar 2025" },
    },
    {
        id: "user-4",
        unseen: false,
        user: {
            avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80",
            name: "Candice Wu",
            href: "#",
            status: "online",
        },
        action: { content: "Member since Feb 2025" },
    },
    {
        id: "user-5",
        unseen: false,
        user: {
            avatarUrl: "https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80",
            name: "Natali Craig",
            href: "#",
            status: "online",
        },
        action: { content: "Member since Mar 2025" },
    },
    {
        id: "user-6",
        unseen: false,
        user: {
            avatarUrl: "https://www.untitledui.com/images/avatars/orlando-diggs?fm=webp&q=80",
            name: "Orlando Diggs",
            href: "#",
            status: "online",
        },
        action: { content: "Member since Apr 2025" },
    },
    {
        id: "user-7",
        unseen: false,
        user: {
            avatarUrl: "https://www.untitledui.com/images/avatars/drew-cano?fm=webp&q=80",
            name: "Drew Cano",
            href: "#",
            status: "online",
        },
        action: { content: "Member since Apr 2025" },
    },
    {
        id: "user-8",
        unseen: false,
        user: {
            avatarUrl: "https://www.untitledui.com/images/avatars/kate-morrison?fm=webp&q=80",
            name: "Kate Morrison",
            href: "#",
            status: "online",
        },
        action: { content: "Member since Jan 2025" },
    },
    {
        id: "user-9",
        unseen: false,
        user: {
            avatarUrl: "https://www.untitledui.com/images/avatars/koray-okumus?fm=webp&q=80",
            name: "Koray Okumus",
            href: "#",
            status: "online",
        },
        action: { content: "Member since Feb 2025" },
    },
    {
        id: "user-10",
        unseen: false,
        user: {
            avatarUrl: "https://www.untitledui.com/images/avatars/ava-wright?fm=webp&q=80",
            name: "Ava Wright",
            href: "#",
            status: "online",
        },
        action: { content: "Member since Mar 2025" },
    },
];

const Simple03Vertical = ({
    article,
    imageClassName,
    titleClassName,
    className,
}: {
    article: Article;
    imageClassName?: string;
    titleClassName?: string;
    className?: string;
}) => (
    <div className={cx("flex flex-col gap-4", className)}>
        <a href={article.href} className="overflow-hidden rounded-2xl" tabIndex={-1}>
            <img src={article.thumbnailUrl} alt={article.title} className={cx("aspect-[1.5] w-full object-cover", imageClassName)} />
        </a>

        <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-2">
                <p className="text-sm font-semibold text-brand-secondary">
                    {article.author.name} • {article.publishedAt}
                </p>
                <div className="flex w-full flex-col gap-1">
                    <a
                        href={article.category.href}
                        className={cx(
                            "flex justify-between gap-x-4 rounded-md text-lg font-semibold text-primary outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2",
                            titleClassName,
                        )}
                    >
                        {article.title}
                        <ArrowUpRight className="mt-0.5 size-6 shrink-0 text-fg-quaternary" aria-hidden="true" />
                    </a>
                    <p className="line-clamp-2 text-md text-tertiary">{article.summary}</p>
                </div>
            </div>

            <div className="flex gap-2">
                {article.tags.map((tag) => (
                    <a key={tag.name} href={tag.href} className="rounded-xl outline-focus-ring focus-visible:outline-2 focus-visible:outline-offset-2">
                        <Badge color={tag.color} size="md">
                            {tag.name}
                        </Badge>
                    </a>
                ))}
            </div>
        </div>
    </div>
);

export const Dashboard01 = () => {
    return (
        <div className="flex flex-col bg-primary lg:flex-row">
            <SidebarNavigationSimple
                activeUrl="/dashboard"
                items={[
                    {
                        label: "Home",
                        href: "/",
                        icon: HomeLine,
                    },
                    {
                        label: "Dashboard",
                        href: "/dashboard",
                        icon: BarChartSquare02,
                    },
                    {
                        label: "Projects",
                        href: "/projects",
                        icon: Rows01,
                    },
                    {
                        label: "Tasks",
                        href: "/tasks",
                        icon: CheckDone01,
                        badge: 8,
                    },
                    {
                        label: "Reporting",
                        href: "/reporting",
                        icon: PieChart03,
                    },
                    {
                        label: "Users",
                        href: "/users",
                        icon: Users01,
                    },
                ]}
                featureCard={
                    <FeaturedCardImage
                        title="New features available!"
                        description="Check out the new dashboard view. Pages now load faster."
                        confirmLabel="What's new?"
                        imageSrc="https://www.untitledui.com/application/smiling-girl-2.webp"
                        onConfirm={() => {}}
                        onDismiss={() => {}}
                    />
                }
            />

            <main className="min-w-0 flex-1 bg-primary pt-8 pb-12">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-5 px-4 lg:px-8">
                        {/* Page header simple with search */}
                        <div className="relative flex flex-col gap-4">
                            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
                                <div className="flex flex-col gap-0.5 lg:gap-1">
                                    <h1 className="text-xl font-semibold text-primary lg:text-display-xs">Dashboard</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3 lg:justify-between">
                            <ButtonGroup defaultSelectedKeys={["12-months"]}>
                                <ButtonGroupItem id="12-months">
                                    <span className="max-lg:hidden">12 months</span>
                                    <span className="lg:hidden">12m</span>
                                </ButtonGroupItem>
                                <ButtonGroupItem id="30-days">
                                    <span className="max-lg:hidden">30 days</span>
                                    <span className="lg:hidden">30d</span>
                                </ButtonGroupItem>
                                <ButtonGroupItem id="7-days">
                                    <span className="max-lg:hidden">7 days</span>
                                    <span className="lg:hidden">7d</span>
                                </ButtonGroupItem>
                                <ButtonGroupItem id="24-hours">
                                    <span className="max-lg:hidden">24 hours</span>
                                    <span className="lg:hidden">24h</span>
                                </ButtonGroupItem>
                            </ButtonGroup>

                            <div className="hidden gap-3 lg:flex">
                                <DateRangePicker />

                                <Button color="secondary" size="md" iconLeading={FilterLines}>
                                    Filters
                                </Button>
                            </div>

                            <div className="lg:hidden">
                                <Button color="secondary" size="md" iconLeading={FilterLines} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 px-4 lg:flex-row lg:gap-8 lg:px-8">
                        <div className="flex flex-1 flex-col gap-6 lg:flex-row lg:flex-wrap lg:gap-x-8 lg:gap-y-4">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium text-tertiary">MRR</p>

                                <div className="flex items-start gap-2">
                                    <div className="flex items-start gap-0.5">
                                        <span className="pt-0.5 text-xl font-medium text-primary">$</span>
                                        <span className="text-display-md font-semibold text-primary">18,880</span>
                                    </div>

                                    <MetricChangeIndicator type="trend" trend="positive" value="7.4%" />
                                </div>
                            </div>

                            <div className="flex h-50 w-full flex-col gap-2 lg:h-60 lg:min-w-[480px] lg:flex-1 xl:min-w-[560px]">
                                <ResponsiveContainer className="h-full">
                                    <AreaChart data={lineData} className="text-tertiary [&_.recharts-text]:text-xs">
                                        <defs>
                                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="currentColor" className="text-utility-brand-700" stopOpacity="0.7" />
                                                <stop offset="95%" stopColor="currentColor" className="text-utility-brand-700" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>

                                        <CartesianGrid vertical={false} stroke="currentColor" className="text-utility-gray-100" />

                                        <XAxis
                                            fill="currentColor"
                                            axisLine={false}
                                            tickLine={false}
                                            tickMargin={10}
                                            interval="preserveStartEnd"
                                            dataKey="date"
                                            padding={{ left: 12, right: 12 }}
                                            tickFormatter={(value) => value.toLocaleDateString(undefined, { month: "short" })}
                                        />

                                        <RechartsTooltip
                                            content={<ChartTooltipContent />}
                                            formatter={(value) => Number(value).toLocaleString()}
                                            labelFormatter={(value) => value.toLocaleDateString(undefined, { month: "short", year: "numeric" })}
                                            cursor={{
                                                className: "stroke-utility-brand-600 stroke-2",
                                            }}
                                        />

                                        <Area
                                            isAnimationActive={false}
                                            className="text-utility-brand-600 [&_.recharts-area-area]:translate-y-[6px] [&_.recharts-area-area]:[clip-path:inset(0_0_6px_0)]"
                                            dataKey="A"
                                            type="linear"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            fill="url(#gradient)"
                                            fillOpacity={0.1}
                                            activeDot={{
                                                className: "fill-bg-primary stroke-utility-brand-600 stroke-2",
                                            }}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <dl className="flex w-full max-w-60 flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <dt className="text-sm font-medium text-tertiary">Total members</dt>
                                <dd className="flex items-start gap-2">
                                    <span className="text-display-sm font-semibold text-primary">4,862</span>
                                    <MetricChangeIndicator type="trend" trend="positive" value="9.2%" />
                                </dd>
                            </div>
                            <div className="flex flex-col gap-2">
                                <dt className="text-sm font-medium text-tertiary">Paid members</dt>
                                <dd className="flex items-start gap-2">
                                    <span className="text-display-sm font-semibold text-primary">2,671</span>
                                    <MetricChangeIndicator type="trend" trend="positive" value="6.6%" />
                                </dd>
                            </div>
                            <div className="flex flex-col gap-2">
                                <dt className="text-sm font-medium text-tertiary">Email open rate</dt>
                                <dd className="flex items-start gap-2">
                                    <span className="text-display-sm font-semibold text-primary">82%</span>
                                    <MetricChangeIndicator type="trend" trend="positive" value="8.1%" />
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div className="flex flex-col gap-6 px-4 lg:px-8">
                        <SectionHeader.Root>
                            <SectionHeader.Group>
                                <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                                    <SectionHeader.Heading>Start creating content</SectionHeader.Heading>
                                </div>

                                <div className="absolute top-0 right-0 md:static">
                                    <TableRowActionsDropdown />
                                </div>
                            </SectionHeader.Group>
                        </SectionHeader.Root>

                        <div className="flex flex-col gap-8 lg:flex-row">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-wrap gap-5 lg:gap-6">
                                    <button className="flex min-w-[320px] flex-1 cursor-pointer gap-3 rounded-xl bg-primary p-4 shadow-xs ring-1 ring-secondary outline-focus-ring ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 lg:p-5">
                                        <FeaturedIcon icon={UserPlus01} color="gray" theme="modern" size="lg" className="hidden lg:flex" />
                                        <FeaturedIcon icon={UserPlus01} color="gray" theme="modern" size="md" className="lg:hidden" />

                                        <div className="flex min-w-0 flex-1 flex-col items-start gap-0.5 text-left">
                                            <p className="text-md font-semibold text-secondary">Create your first member</p>
                                            <p className="max-w-full truncate text-sm text-tertiary">Add yourself or import from CSV</p>
                                        </div>
                                    </button>
                                    <button className="flex min-w-[320px] flex-1 cursor-pointer gap-3 rounded-xl bg-primary p-4 shadow-xs ring-1 ring-secondary outline-focus-ring ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 lg:p-5">
                                        <FeaturedIcon icon={Edit04} color="gray" theme="modern" size="lg" className="hidden lg:flex" />
                                        <FeaturedIcon icon={Edit04} color="gray" theme="modern" size="md" className="lg:hidden" />

                                        <div className="flex min-w-0 flex-1 flex-col items-start gap-0.5 text-left">
                                            <p className="text-md font-semibold text-secondary">Create a new post</p>
                                            <p className="max-w-full truncate text-sm text-tertiary">Dive into the editor and start creating</p>
                                        </div>
                                    </button>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <SectionHeader.Root>
                                        <SectionHeader.Group>
                                            <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                                                <SectionHeader.Heading>Recent posts</SectionHeader.Heading>
                                            </div>

                                            <div className="absolute top-0 right-0 md:static">
                                                <TableRowActionsDropdown />
                                            </div>
                                        </SectionHeader.Group>
                                    </SectionHeader.Root>

                                    <div className="flex flex-wrap gap-6">
                                        <Simple03Vertical article={articles[0]} className="min-w-[320px] flex-1" />
                                        <Simple03Vertical article={articles[1]} className="min-w-[320px] flex-1" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full shrink-0 flex-col gap-6 lg:w-60">
                                <p className="hidden text-sm font-medium text-secondary lg:block">Top members</p>

                                <SectionHeader.Root className="lg:hidden">
                                    <SectionHeader.Group>
                                        <div className="flex flex-1 flex-col justify-center gap-0.5 self-stretch">
                                            <SectionHeader.Heading>Top members</SectionHeader.Heading>
                                        </div>

                                        <div className="absolute top-0 right-0 md:static">
                                            <TableRowActionsDropdown />
                                        </div>
                                    </SectionHeader.Group>
                                </SectionHeader.Root>

                                <ul className="flex flex-col gap-6 lg:gap-5">
                                    {feed.map((item) => (
                                        <li key={item.id}>
                                            <FeedItem {...item} size="sm" connector={false} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
