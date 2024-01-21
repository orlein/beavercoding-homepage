drop policy "Enable insert for authenticated users only" on "public"."posts";

create table "public"."tags" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "tag" text not null
);


alter table "public"."tags" enable row level security;

alter table "public"."post_tags" drop column "tag";

alter table "public"."post_tags" add column "tag_id" bigint not null;

alter table "public"."posts" add column "category_id" bigint;

CREATE UNIQUE INDEX tags_pkey ON public.tags USING btree (id);

CREATE UNIQUE INDEX tags_tag_key ON public.tags USING btree (tag);

alter table "public"."tags" add constraint "tags_pkey" PRIMARY KEY using index "tags_pkey";

alter table "public"."post_tags" add constraint "post_tags_tag_id_fkey" FOREIGN KEY (tag_id) REFERENCES tags(id) not valid;

alter table "public"."post_tags" validate constraint "post_tags_tag_id_fkey";

alter table "public"."posts" add constraint "posts_category_id_fkey" FOREIGN KEY (category_id) REFERENCES post_categories(id) not valid;

alter table "public"."posts" validate constraint "posts_category_id_fkey";

alter table "public"."tags" add constraint "tags_tag_key" UNIQUE using index "tags_tag_key";

grant delete on table "public"."tags" to "anon";

grant insert on table "public"."tags" to "anon";

grant references on table "public"."tags" to "anon";

grant select on table "public"."tags" to "anon";

grant trigger on table "public"."tags" to "anon";

grant truncate on table "public"."tags" to "anon";

grant update on table "public"."tags" to "anon";

grant delete on table "public"."tags" to "authenticated";

grant insert on table "public"."tags" to "authenticated";

grant references on table "public"."tags" to "authenticated";

grant select on table "public"."tags" to "authenticated";

grant trigger on table "public"."tags" to "authenticated";

grant truncate on table "public"."tags" to "authenticated";

grant update on table "public"."tags" to "authenticated";

grant delete on table "public"."tags" to "service_role";

grant insert on table "public"."tags" to "service_role";

grant references on table "public"."tags" to "service_role";

grant select on table "public"."tags" to "service_role";

grant trigger on table "public"."tags" to "service_role";

grant truncate on table "public"."tags" to "service_role";

grant update on table "public"."tags" to "service_role";

create policy "Enable insert for authenticated users only"
on "public"."posts"
as permissive
for insert
to authenticated
with check ((auth.uid() = 'e979672e-8d67-447b-9abc-ef13bbfe588d'::uuid));


